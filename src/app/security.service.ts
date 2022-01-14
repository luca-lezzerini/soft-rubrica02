import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private autenticato: boolean = false;

  constructor() { }

  autentica(user: string, psw: string): boolean {
    if (user == "mario" && psw == "mario") {
      this.autenticato = true;
    } else {
      this.autenticato = false;
    }
    return this.autenticato;
  }

  isAutenticato(): boolean {
    return this.autenticato;
  }

  logout() {
    this.autenticato = false;
  }
}
