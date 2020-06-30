import { ClienteService } from './../../services/cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public nomeFilter: string = "";
  constructor(public clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  filtrarCliente(nome) {
    this.nomeFilter = nome;
  }

  getClientes() {
    return this.clienteService.clientes.filter(c => c.nome.toLowerCase().includes(this.nomeFilter.toLowerCase()));
  }

}
