
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-infoville',
  templateUrl: './infoville.component.html',
  styleUrls: ['./infoville.component.css'],
})
export class InfovilleComponent implements OnInit {
  public ville: string = '';
  public population: string = '';
  public departement: string = '';
  public insee: string = '';
  public lat: string = '';
  

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) {}

  ngOnInit() {
    // Écouter les changements du code postal envoyé par FormulaireComponent
    this.messageService.recevoirMessage().subscribe({
      next: (zipCode: string) => {
   
        this.rechercherVille(zipCode);
      },
    });
    }  



  rechercherVille(zipCode: string) {
    this.http
      .get(`https://api-adresse.data.gouv.fr/search/?q=${zipCode}`)
      .subscribe(
        (data: any) => {
          console.log('Données API:', data); // Afficher les données reçues dans la console
          if (data.features.length > 0) {
            this.ville = data.features[0].properties.city || 'Non trouvé';
            this.population =
              data.features[0].properties.population || 'Non trouvé';
            this.departement =
              data.features[0].properties.context || 'Non trouvé';
            this.insee = data.features[0].properties.citycode || 'Non trouvé';
            this.lat = data.features[0].geometry.coordinates.join(',');
          } else {
            alert('Aucune ville trouvée pour ce code postal.');
          }
        },
        (error) => {
          console.error(error);
          alert('Erreur lors de la récupération des données.');
        }
      );
  }
}