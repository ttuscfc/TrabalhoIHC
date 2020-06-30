import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { LoginComponent } from './components/login/login.component';
import { ProdutoService } from './services/produto.service';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Produto } from './models/produto';
import { MatDialog } from '@angular/material/dialog';
import { DetalheComponent } from './components/detalhe/detalhe.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  produtoCtrl = new FormControl();
  filteredProdutos: Observable<Produto[]>;


  constructor(public router: Router, public loginService: LoginService, public produtoService: ProdutoService, public snack: MatSnackBar, public dialog: MatDialog) {
    this.filteredProdutos = this.produtoCtrl.valueChanges
      .pipe(
        startWith(''),
        map(produto => produto ? this._filterProdutos(produto) : produtoService.produtos.slice())
      );
  }

  private _filterProdutos(value: string): Produto[] {
    const filterValue = value.toLowerCase();

    return this.produtoService.produtos.filter(produto => produto.nome.toLowerCase().indexOf(filterValue.toLowerCase()) >= 0);
  }

  public pesquisaClicked(produtoNome: string) {
    alert(produtoNome);
  }

  public verDetalhes(p: Produto) {
    const dialogRef = this.dialog.open(DetalheComponent,
      {
        data: p
      });

    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        this.addCarrinho(p);
      }
    });
  }

  public addCarrinho(p: Produto) {
    this.produtoService.produtosCarrinho.push(p);
    this.snack.open("ADICIONADO AO CARRINHO", null, {
      duration: 2500,
      panelClass: 'nota',
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }

  abirLogin() {
    this.dialog.open(LoginComponent);
  }

  sair() {
    this.loginService.isLogged = false;
    this.router.navigate(["/"]);
  }

}

