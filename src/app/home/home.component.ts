import { Component } from '@angular/core';
import { HeaderComponent } from "../commun/header/header.component";
import { FooterComponent } from "../commun/footer/footer.component";
import { FormulaireComponent } from '../commun/formulaire/formulaire.component';
import { InfovilleComponent } from "../commun/infoville/infoville.component";
import { InfometeoComponent } from "../commun/infometeo/infometeo.component";
import { InfocarteComponent } from '../commun/infocarte/infocarte.component';




@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    FooterComponent,
    FormulaireComponent,
    InfovilleComponent,
    InfometeoComponent,
    InfocarteComponent
],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

}
   