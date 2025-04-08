import { Injectable } from '@angular/core';
import {  Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {


  private messageSource = new Subject<string>(); // Stocke le message
  currentMessage$: any;


  // Méthode pour envoyer un message
  envoyerMessage(message: any): void {
    this.messageSource.next(message);
  }

  recevoirMessage(): Observable<string> {
    return this.messageSource.asObservable();
  }



}
