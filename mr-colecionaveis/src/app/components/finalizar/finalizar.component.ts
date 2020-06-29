import { ProdutoService } from './../../services/produto.service';
import { element } from 'protractor';
import { Component, OnInit, enableProdMode } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-finalizar',
  templateUrl: './finalizar.component.html',
  styleUrls: ['./finalizar.component.css']
})
export class FinalizarComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = true;
  cepOk = false;
  metodoPagamento = "boleto";

  constructor(private _formBuilder: FormBuilder, public produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  async buscaCep() {

    var cep = (document.getElementById("cep") as HTMLInputElement).value;

    cep = cep.replace(".", "").replace("-", "");
    if (cep.length != 8) {
      this.cepOk = false;
      return;
    }

    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', `https://viacep.com.br/ws/${cep}/json`);
    xhttp.onload = (e) => {
      var endereco = JSON.parse(xhttp.response);

      if (endereco.erro == true) {
        this.cepOk = false;
      }
      else {
        this.cepOk = true;
        this.produtoService.frete = 27.9;
      }

      new Promise(resolve => setTimeout(resolve, 500)).then(() => {
        console.log(endereco);
        (document.getElementById("rua") as HTMLInputElement).value = endereco.logradouro;
        (document.getElementById("bairro") as HTMLInputElement).value = endereco.bairro;
        (document.getElementById("cidade") as HTMLInputElement).value = endereco.localidade;
        (document.getElementById("estado") as HTMLInputElement).value = endereco.uf;
      });

    }
    xhttp.send();

  }
}
