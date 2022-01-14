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

  delRubrica(c: Contatto): Contatto[] {
    console.log("Prima della cura ", this.rubrica);
    let n: Contatto[] = [];
    for (let e of this.rubrica) {
      if (!((e.nome == c.nome) && (e.cognome == c.cognome) && (e.telefono == c.telefono))) {
        n.push(e);
      }
    }
    this.rubrica = n;
    console.log("Dopo la cura ", this.rubrica);
    return this.getRubrica();
  }
}
