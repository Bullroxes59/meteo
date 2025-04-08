import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './commun/header/header.component';
import { FooterComponent } from './commun/footer/footer.component';
import { FormulaireComponent } from './commun/formulaire/formulaire.component';
import { InfovilleComponent } from './commun/infoville/infoville.component';
import { InfometeoComponent } from './commun/infometeo/infometeo.component';
import { InfocarteComponent } from './commun/infocarte/infocarte.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', component: HeaderComponent },
  { path: '', component: FooterComponent },
  { path: '', component: FormulaireComponent },
  { path: '', component: InfovilleComponent },
  { path: '', component: InfometeoComponent },
  { path: '', component: InfocarteComponent },
];
