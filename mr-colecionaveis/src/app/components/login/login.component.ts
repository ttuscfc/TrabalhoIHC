import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  entrar(u: string, s: string) {
    if (u.toLowerCase().includes('cli')) {
      alert("CLIENTE");
    }
    else {
      alert("FUNCIONARIO")
    }
  }

}
