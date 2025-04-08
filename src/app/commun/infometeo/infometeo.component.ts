import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-infometeo',
  templateUrl: './infometeo.component.html',
  styleUrls: ['./infometeo.component.css'],
})
export class InfometeoComponent implements OnInit {
  public code: any;
  public temp: any;
  public humidity: any;
  public vent: any;
  public ciel: any;
  private apiKey = '52c0c3d71a4d8984966228b19efbedfd';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
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
      .get(
        `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},fr&appid=${this.apiKey}&units=metric&lang=fr`
      )
      .subscribe(
        (data: any) => {
          console.log(data);
          if (data.main) {
            
          
          this.temp = `${data.main.temp} °C`;
          this.humidity = `${data.main.humidity} %`;
          this.vent = `${data.wind.speed} M/S`;
          this.ciel = data.weather[0].description;
          } else {
            alert('Impossible de récupérer les données. Vérifiez le code postal.');
          }
        },
        (error) => {
          console.error(error);
          alert(
            'Impossible de récupérer les données. Vérifiez le code postal.'
          );
        }
      );
  }
}


