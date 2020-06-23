import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() { }

  public produtos: Produto[] = [
    {
      nome: "KONG 2.0 (DELUXE) - KONG: SKULL ISLAND - SOFT VYNIL STATUE - STAR ACE",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/image/1000x/9df78eab33525d08d6e5fb8d27136e95/k/o/kong3_2.jpg",
      descricao: `Figura do personagem Kong no filme Kong: Ilha da Caveira
      Figura: Kong: Skull Island Kong 2.0 (Deluxe) Soft Vinyl Statue
      Fabricante: Star Ace`,
      preco: 1557.05
    }
  ]




}
