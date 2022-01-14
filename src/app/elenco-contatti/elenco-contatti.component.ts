import { Contatto } from './../model/contatto';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-elenco-contatti',
  templateUrl: './elenco-contatti.component.html',
  styleUrls: ['./elenco-contatti.component.css']
})
export class ElencoContattiComponent implements OnInit {

  @Input() elenco: Contatto[] = [];
  @Output() cancella: EventEmitter<Contatto> = new EventEmitter<Contatto>();

  constructor() { }

  ngOnInit(): void {
  }

  elimina(c: Contatto){
    this.cancella.emit(c);
  }

}
