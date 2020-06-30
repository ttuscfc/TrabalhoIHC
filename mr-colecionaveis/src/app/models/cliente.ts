import { Produto } from './produto';
import { Pedido } from './pedido';

export class Cliente {
    id: number;
    nome: String;
    endereco: String;
    pedidos: Array<Pedido>;
}