import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoContattiComponent } from './elenco-contatti.component';

describe('ElencoContattiComponent', () => {
  let component: ElencoContattiComponent;
  let fixture: ComponentFixture<ElencoContattiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElencoContattiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElencoContattiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
