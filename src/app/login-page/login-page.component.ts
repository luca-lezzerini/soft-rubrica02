import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  username: string = "";
  password: string = "";

  constructor(
    private sec: SecurityService,
    private router: Router) { }

  ngOnInit(): void {
  }

  accedi() {
    if (this.sec.autentica(this.username, this.password)) {
      this.router.navigateByUrl('/main');
    } else {
      this.router.navigateByUrl('/error');
    }
  }
}
