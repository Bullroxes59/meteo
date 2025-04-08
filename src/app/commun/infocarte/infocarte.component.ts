// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { MessageService } from '../../services/message.service';
// import * as L from 'leaflet';

// @Component({
//   selector: 'app-infocarte',
//   templateUrl: './infocarte.component.html',
//   styleUrls: ['./infocarte.component.css'],
// })
// export class InfocarteComponent implements OnInit {
//   private map: L.Map | null = null;
//   private marker!: L.Marker;

//   constructor(
//     private messageService: MessageService,
//     private http: HttpClient
//   ) {}

//   ngOnInit(): void {
//     this.initMap();
//     // Écoute les messages envoyés par le service
//     this.messageService.recevoirMessage().subscribe({
//       next: (zipCode: string) => {
//         console.log('📍 Code postal reçu:', zipCode);
//         if (zipCode) {
//           this.afficherVilleSurCarte(zipCode);
//         }
//       },
//       error: (err) => console.error('Erreur réception message:', err),
//     });
//   }

//   private initMap(lat: number, lon: number): void {
//     if (!this.map) {
//       this.map = L.map('map').setView([lat, lon], 15);
//       L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; OpenStreetMap contributors',
//       }).addTo(this.map);
//     }
//   }

//   private afficherVilleSurCarte(zipCode: string): void {
//     this.http
//       .get(`https://api-adresse.data.gouv.fr/search/?q=${zipCode}`)
//       .subscribe({
//         next: (data: any) => {
//           if (data.features.length > 0) {
//             const ville = data.features[0].properties.city || 'Non trouvé';
//             const lat = data.features[0].geometry.coordinates[1];
//             const lon = data.features[0].geometry.coordinates[0];

//             // Initialiser la carte à la première réception de code postal
//             if (!this.map) {
//               this.initMap(lat, lon);
//             }

//             // Centrer la carte et ajouter un marqueur
//             this.map!.setView([lat, lon], 15);
//             if (this.marker) {
//               this.marker.setLatLng([lat, lon]).bindPopup(ville).openPopup();
//             } else {
//               this.marker = L.marker([lat, lon])
//                 .addTo(this.map!)
//                 .bindPopup(ville)
//                 .openPopup();
//             }
//           } else {
//             alert('🚫 Aucune ville trouvée pour ce code postal.');
//           }
//         },
//         error: (error) => {
//           console.error('Erreur API:', error);
//           alert('⚠️ Impossible de récupérer les données.');
//         },
//       });
//   }
// }

import { Component, OnInit } from '@angular/core'; // OnInit pour initialiser les valeurs
import { MessageService } from '../../services/message.service'; // Service pour recevoir le code postal
import { HttpClient } from '@angular/common/http'; // Pour faire des requêtes API
import * as L from 'leaflet';

@Component({
  selector: 'app-carte',  
  templateUrl: './infocarte.component.html',
  styleUrls: ['./infocarte.component.css']
})
export class InfocarteComponent implements OnInit {
  private map!: L.Map;
  private marker!: L.Marker; // Stocker le marqueur

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.initMap();

    // Écoute le code postal envoyé par le formulaire
    this.messageService.recevoirMessage().subscribe((zipCode: string) => {
      this.afficherVilleSurCarte(zipCode);
    });
  }

  private initMap(): void {
    this.map = L.map('map').setView([48.8566, 2.3522], 6); // Zoom large sur la France

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

  }

  private afficherVilleSurCarte(zipCode: string): void {
    // Appel à l'API pour récupérer les coordonnées GPS de la ville
    this.http.get(`https://api-adresse.data.gouv.fr/search/?q=${zipCode}&limit=1`)
      .subscribe((data: any) => {
        if (data.features.length > 0) {
          const longitude = data.features[0].geometry.coordinates[0];
          const latitude = data.features[0].geometry.coordinates[1];
          const ville = data.features[0].properties.label;

          // Mettre à jour la carte
          this.map.setView([latitude, longitude], 15); // Zoom sur la ville

          // Supprimer l'ancien marqueur s'il existe
          if (this.marker) {
            this.map.removeLayer(this.marker);
          }

          // Ajouter un nouveau marqueur
          this.marker = L.marker([latitude, longitude])
            .addTo(this.map)
            .bindPopup(ville)
            .openPopup();
        } else {
          alert('Aucune ville trouvée pour ce code postal.');
        }
      }, (error) => {
        alert('Erreur lors de la récupération des données.');
      });
  }
}