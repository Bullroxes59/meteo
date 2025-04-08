// import { Component } from '@angular/core';
// import { ReactiveFormsModule } from '@angular/forms';
// import { FormControl } from '@angular/forms';


// @Component({
//   selector: 'app-formulaire',
//   imports: [ReactiveFormsModule],
//   templateUrl: './formulaire.component.html',
//   styleUrls: ['./formulaire.component.css'],
// })
// export class FormulaireComponent {
//   public code = new FormControl('');
//    afficherMessage() {
//     const zipCode = this.code.value;
//     console.log(zipCode);
// }}

import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css'],
  imports: [ReactiveFormsModule]
})
export class FormulaireComponent {
  public code = new FormControl(''); // Définir le FormControl

  constructor(private messageService: MessageService) {}

  envoyerCode() {

      this.messageService.envoyerMessage(this.code.value); // Envoi du code postal
    }
 
}
