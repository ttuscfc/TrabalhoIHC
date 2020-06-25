import { ProdutoService } from './../../services/produto.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { Produto } from 'src/app/models/produto';

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

  constructor(public produtoService: ProdutoService) { }


  images = [
    "https://fantoy.com.br/media/banner/ref1_Fantoy_Destaque_Animes_BannerSite.jpg",
    "https://fantoy.com.br/media/banner/ref2_Fantoy_Lancamento_Junho_BannerSite.jpg",
  ]

  ngOnInit(): void {
  }

  public getProdutos(): Array<Produto> {
    // Retorna a array limitada pelo numero de paginas
    return this.produtoService.produtos.slice(0, this.paginas * 30).filter(produto => produto.preco < this.value).concat();
  }

  public carregarMais() {
    this.paginas++;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(ev: Event) {

    console.log(window.scrollY);

    if (window.scrollY < 440) {
      this.carrinhoEstilo = {
        position: "absolute",
        top: "0px",
        bottom: ""
      }
    }
    else if (window.scrollY < (4270 * this.paginas)) {
      this.carrinhoEstilo = {
        position: "fixed",
        top: "4%",
        bottom: ""
      }
    }
    else {
      this.carrinhoEstilo = {
        position: "absolute",
        top: "",
        bottom: "20px"
      }
    }


  }

}
