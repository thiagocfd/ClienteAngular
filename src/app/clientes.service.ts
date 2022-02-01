import { Injectable } from '@angular/core';
import { Cliente } from './clientes/clientes-form/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  getCliente() : Cliente {
    let cliente : Cliente = new Cliente();
    cliente.nome = 'Fulano de tal';
    cliente.cpf = '888888';
    return cliente;

  }
}
