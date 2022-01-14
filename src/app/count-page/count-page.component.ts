import { Component, OnInit } from '@angular/core';
import { Contatto } from '../model/contatto';
import { RubricaManagerService } from '../rubrica-manager.service';

@Component({
  selector: 'app-count-page',
  templateUrl: './count-page.component.html',
  styleUrls: ['./count-page.component.css']
})
export class CountPageComponent implements OnInit {

  contatti: Contatto[] = [];

  constructor(private rub: RubricaManagerService) {
    this.contatti = rub.getRubrica();
  }

  ngOnInit(): void {
  }

  
}
