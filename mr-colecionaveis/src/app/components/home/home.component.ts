import { DetalheComponent } from './../detalhe/detalhe.component';
import { ProdutoService } from './../../services/produto.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public paginas = 1;
  public carrinhoEstilo = {
    position: "absolute",
    top: "0px",
    bottom: ""
  };
  public value = 8000;
  public categoriaFormCtrl = new FormControl();
  public todasSelected = true;
  public selectedOrderBy = "Maior Preço";

  constructor(public produtoService: ProdutoService, public snack: MatSnackBar, public dialog: MatDialog) { }


  images = [
    "https://fantoy.com.br/media/banner/ref1_Fantoy_Destaque_Animes_BannerSite.jpg",
    "https://fantoy.com.br/media/banner/ref2_Fantoy_Lancamento_Junho_BannerSite.jpg",
  ]

  ngOnInit(): void {
    this.categoriaFormCtrl.setValue([
      "Todas",
      "Bleach",
      "Death Note",
      "Naruto",
      "One Piece",
      "Clássicos",
      "Terror",
      "King Kong",
      "Simpson",
      "Aquaman",
      "Batiman",
      "Liga da Justiça",
      "Superman",
      "Capitã Marvel",
      "Deadpool",
      "Pantera Negra",
      "Vingadores"
    ]);

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

  public getProdutos(): Array<Produto> {
    // Retorna a array limitada pelo numero de paginas
    return this.produtoService.produtos.filter(produto => produto.preco < this.value).sort((a, b) => {
      if (this.selectedOrderBy == "Nome A-Z") {
        if (a.nome < b.nome)
          return -1;
        else
          return 1;
      }
      else if (this.selectedOrderBy == "Nome Z-A") {
        if (a.nome > b.nome)
          return -1;
        else
          return 1;
      }
      else if (this.selectedOrderBy == "Maior Preço") {
        return b.preco - a.preco;
      }
      else {
        return a.preco - b.preco;
      }
    }).slice(0, this.paginas * 30).concat();
  }

  public carregarMais() {
    this.paginas++;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(ev: Event) {


    if (window.scrollY < 470) {
      this.carrinhoEstilo = {
        position: "absolute",
        top: "0px",
        bottom: ""
      }
    }
    else if (window.scrollY < (4270 * this.paginas)) {
      this.carrinhoEstilo = {
        position: "fixed",
        top: "0px",
        bottom: ""
      }
    }
    else {
      this.carrinhoEstilo = {
        position: "absolute",
        top: "",
        bottom: "50px"
      }
    }


  }

  public onCategChange(e) {
    // Selecionou opção todas
    if (e.value.includes("Todas") && !this.todasSelected) {
      this.todasSelected = true;
      this.categoriaFormCtrl.setValue([
        "Todas",
        "Bleach",
        "Death Note",
        "Naruto",
        "One Piece",
        "Clássicos",
        "Terror",
        "King Kong",
        "Simpson",
        "Aquaman",
        "Batiman",
        "Liga da Justiça",
        "Superman",
        "Capitã Marvel",
        "Deadpool",
        "Pantera Negra",
        "Vingadores"
      ]);
    }
    // Deselecionou opção todas
    else if (!e.value.includes("Todas") && this.todasSelected) {
      this.todasSelected = false;
      this.categoriaFormCtrl.setValue([]);
    }

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

}
