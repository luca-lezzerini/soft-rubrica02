import { Injectable } from '@angular/core';
import { Contatto } from './model/contatto';

@Injectable({
  providedIn: 'root'
})
export class RubricaManagerService {

  private rubrica: Contatto[] = [];

  constructor() { }

  getRubrica(): Contatto[] {
    return this.rubrica;
  }

  addRubrica(c: Contatto) {
    this.rubrica.push(c);
  }

  delRubrica(c: Contatto){
    // TODO:
  }
}
