import { Contatto } from './../model/contatto';
import { Component, OnInit } from '@angular/core';
import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
import { RubricaManagerService } from '../rubrica-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  contatto: Contatto = new Contatto();
  contatti: Contatto[] = [];

  constructor(
    private rub: RubricaManagerService,
    private router: Router) {
    this.contatti = rub.getRubrica();
  }

  ngOnInit(): void {
  }

  aggiungi() {
    // 1) creare un contatto da aggiungere alla lista
    // let cx: Contatto = new Contatto();

    // 2) popolare i campi del contatto
    // cx.nome = this.nome;
    // cx.cognome = this.cognome;
    // cx.telefono = this.telefono

    // 3) aggiungo alla lista
    this.rub.addRubrica(this.contatto);
    this.contatto = new Contatto();
  }

  conta() {
    this.router.navigateByUrl("/count");
  }

  ricerca() {
    // TODO:
  }

  rimuovi(c: Contatto) {
    this.rub.delRubrica(c);
  }
}
