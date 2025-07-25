//domain/PedidoRepository.ts
import { Pedido } from './Diagrama/Pedido';

export interface PedidoRepository {
  guardar(pedido: Pedido): Promise<void>;
  obtenerPorId(id: string): Promise<Pedido | null>;
}
