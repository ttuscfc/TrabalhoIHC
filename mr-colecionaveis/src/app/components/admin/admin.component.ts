import { MatSnackBar } from '@angular/material/snack-bar';
import { ClienteService } from './../../services/cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public nomeFilter: string = "";
  public theImg: any;

  constructor(public clienteService: ClienteService, public sncak: MatSnackBar) { }

  ngOnInit(): void {
  }

  filtrarCliente(nome) {
    this.nomeFilter = nome;
  }

  getClientes() {
    return this.clienteService.clientes.filter(c => c.nome.toLowerCase().includes(this.nomeFilter.toLowerCase()));
  }

  onFileSelected(event) {
    if (event.target.files.length > 0) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (_event) => {
        this.theImg = reader.result;
      }

    }
  }

  cadastrar() {
    this.sncak.open("Novo Produto Cadastrado!", null, {
      duration: 2200,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: 'nota'
    });

    this.theImg = "";
    (document.getElementById("nome") as HTMLInputElement).value = "";
    (document.getElementById("descricao") as HTMLInputElement).value = "";
    (document.getElementById("preco") as HTMLInputElement).value = "";
  }
}
