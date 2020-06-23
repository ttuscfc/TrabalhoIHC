import { ProdutoService } from './services/produto.service';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Produto } from './models/produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  produtoCtrl = new FormControl();
  filteredProdutos: Observable<Produto[]>;


  constructor(public produtoService: ProdutoService) {
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

}

