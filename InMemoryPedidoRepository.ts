//infrastructure/InMemoryPedidoRepository.ts
import { Pedido } from './Pedido';
import { PedidoRepository } from './Diagrama/PedidoRepository';

export class InMemoryPedidoRepository implements PedidoRepository {
  private pedidos = new Map<string, Pedido>();

  async guardar(pedido: Pedido): Promise<void> {
    this.pedidos.set(pedido.id, pedido);
    console.log(`N. ${pedido.id} Pedido guardado: ${pedido.descripcion} por el monto de $${pedido.total}`);
  }

  async obtenerPorId(id: string): Promise<Pedido | null> {
    return this.pedidos.get(id) || null;
  }
}
