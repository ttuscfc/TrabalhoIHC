import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {
  }

  entrar(u: string, s: string) {
    if (u.toLowerCase().includes('cli')) {
      this.router.navigate(['/historicoPedidos']);
      this.dialogRef.close();
    }
    else {
      this.router.navigate(['/admin']);
      this.dialogRef.close();
    }
  }

}
