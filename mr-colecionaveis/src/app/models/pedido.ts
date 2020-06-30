import { Produto } from './produto';

export class Pedido {
    id: number;
    dt: String;
    nomeCliente: String;
    itens: Array<Produto>;
    valorTotal: number;
    endereco: String;
    status: string;
}