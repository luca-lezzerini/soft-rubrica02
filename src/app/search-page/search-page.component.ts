import { Component, OnInit } from '@angular/core';
import { Contatto } from '../model/contatto';
import { RubricaManagerService } from '../rubrica-manager.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  lista: Contatto[] = [];
  criterio: string = "";

  constructor(private rub: RubricaManagerService) { }

  ngOnInit(): void {
  }

  rimuovi(c: Contatto) {
    this.lista = this.rub.delRubrica(c);
  }

  cerca() {
    this.lista = [];
    let r = this.rub.getRubrica();
    for (let e of r) {
      if (e.nome == this.criterio) {
        this.lista.push(e);
      }
    }
  }

}
