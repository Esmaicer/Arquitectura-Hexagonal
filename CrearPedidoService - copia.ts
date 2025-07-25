//application/CrearPedidoService.ts
import { Pedido } from './Pedido';
import { PedidoRepository } from '../PedidoRepository';

export class CrearPedidoService {
  constructor(private pedidoRepo: PedidoRepository) {}

  async ejecutar(id: string, descripcion: string, total: number): Promise<void> {
    const pedido = new Pedido(id, descripcion, total);
    await this.pedidoRepo.guardar(pedido);
  }
}
