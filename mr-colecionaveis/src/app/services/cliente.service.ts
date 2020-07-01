import { Cliente } from './../models/cliente';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  public clientes: Array<Cliente> = [
    {
      id: 1,
      nome: 'Valdemar Pereira',
      endereco: 'Rua Tavares, 14 - Bairro Alto - Curitiba PR',
      pedidos: [
        {
          id: 2,
          dt: '12/07/2020',
          nomeCliente: 'Rafael Bini',
          valorTotal: 1407,
          endereco: 'Rua João da Madre, 12 - Bairro Alto - Curitiba - PR',
          status: 'Liberado para entrega',
          itens: [
            {
              qtd: 1,
              nome: "SENHOR BARRIGA 1/10 ART SCALE - CHAVES - IRON STUDIOS",
              imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/b/a/barriga4.jpg",
              preco: 379
            },
            {
              qtd: 1,
              nome: "SPIDER-MAN (ADVANCED SUIT) - MARVEL GAMERVERSE - POP CULTURE SHOCK",
              imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/s/p/spider_9.jpg",
              preco: 394
            },
            {
              qtd: 1,
              nome: "BISON - STREET FIGHTER - S.H.FIGUARTS - BANDAI",
              imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/b/i/bison.jpg",
              preco: 649
            },
          ]
        },

        {
          id: 1,
          dt: '21/03/2020',
          nomeCliente: 'Rafael Bini',
          valorTotal: 2693,
          endereco: 'Rua João da Madre, 12 - Bairro Alto - Curitiba - PR',
          status: 'Pedido entregue',
          itens: [
            {
              qtd: 1,
              nome: "GOGETA SUPER SAIYAN BLUE - DRAGON BALL SUPER - WARRIORS BATTLE RETSUDEN CHAPTER 5 - BANDAI/BANPRESTO",
              imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/g/o/gogetassblue.jpg",
              preco: 224
            },
            {
              qtd: 1,
              nome: "THE BRIDE 1/6 SCALE FIGURE - KILL BILL VOL. 1 - STAR ACE",
              imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/b/r/bride3.jpg",
              preco: 2469
            }
          ]
        },

      ]
    },
    {
      id: 2,
      nome: 'Jurací de Almeida',
      endereco: 'Rua João, 120 - Bairro Agua Verde - Curitiba PR',
      pedidos: [
        {
          id: 4,
          dt: '12/07/2020',
          nomeCliente: 'Rafael Bini',
          valorTotal: 1407,
          endereco: 'Rua João da Madre, 12 - Bairro Alto - Curitiba - PR',
          status: 'Liberado para entrega',
          itens: [
            {
              qtd: 1,
              nome: "SENHOR BARRIGA 1/10 ART SCALE - CHAVES - IRON STUDIOS",
              imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/b/a/barriga4.jpg",
              preco: 379
            },
            {
              qtd: 1,
              nome: "SPIDER-MAN (ADVANCED SUIT) - MARVEL GAMERVERSE - POP CULTURE SHOCK",
              imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/s/p/spider_9.jpg",
              preco: 394
            },
            {
              qtd: 1,
              nome: "BISON - STREET FIGHTER - S.H.FIGUARTS - BANDAI",
              imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/b/i/bison.jpg",
              preco: 649
            },
          ]
        },

        {
          id: 3,
          dt: '21/03/2020',
          nomeCliente: 'Rafael Bini',
          valorTotal: 2693,
          endereco: 'Rua João da Madre, 12 - Bairro Alto - Curitiba - PR',
          status: 'Pedido entregue',
          itens: [
            {
              qtd: 1,
              nome: "GOGETA SUPER SAIYAN BLUE - DRAGON BALL SUPER - WARRIORS BATTLE RETSUDEN CHAPTER 5 - BANDAI/BANPRESTO",
              imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/g/o/gogetassblue.jpg",
              preco: 224
            },
            {
              qtd: 1,
              nome: "THE BRIDE 1/6 SCALE FIGURE - KILL BILL VOL. 1 - STAR ACE",
              imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/b/r/bride3.jpg",
              preco: 2469
            }
          ]
        },

      ]
    },
    {
      id: 3,
      nome: 'Sérgio Moraes',
      endereco: 'Rua Licra, 2 - Bairro Portão - Curitiba PR',
      pedidos: [
        {
          id: 6,
          dt: '12/07/2020',
          nomeCliente: 'Rafael Bini',
          valorTotal: 1407,
          endereco: 'Rua João da Madre, 12 - Bairro Alto - Curitiba - PR',
          status: 'Liberado para entrega',
          itens: [
            {
              qtd: 1,
              nome: "SENHOR BARRIGA 1/10 ART SCALE - CHAVES - IRON STUDIOS",
              imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/b/a/barriga4.jpg",
              preco: 379
            },
            {
              qtd: 1,
              nome: "SPIDER-MAN (ADVANCED SUIT) - MARVEL GAMERVERSE - POP CULTURE SHOCK",
              imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/s/p/spider_9.jpg",
              preco: 394
            },
            {
              qtd: 1,
              nome: "BISON - STREET FIGHTER - S.H.FIGUARTS - BANDAI",
              imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/b/i/bison.jpg",
              preco: 649
            },
          ]
        },

        {
          id: 5,
          dt: '21/03/2020',
          nomeCliente: 'Rafael Bini',
          valorTotal: 2693,
          endereco: 'Rua João da Madre, 12 - Bairro Alto - Curitiba - PR',
          status: 'Pedido entregue',
          itens: [
            {
              qtd: 1,
              nome: "GOGETA SUPER SAIYAN BLUE - DRAGON BALL SUPER - WARRIORS BATTLE RETSUDEN CHAPTER 5 - BANDAI/BANPRESTO",
              imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/g/o/gogetassblue.jpg",
              preco: 224
            },
            {
              qtd: 1,
              nome: "THE BRIDE 1/6 SCALE FIGURE - KILL BILL VOL. 1 - STAR ACE",
              imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/b/r/bride3.jpg",
              preco: 2469
            }
          ]
        },

      ]
    },
  ];
}
