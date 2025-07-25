import { InMemoryPedidoRepository } from '../InMemoryPedidoRepository';
import { CrearPedidoService } from '../CrearPedidoService';

async function main() {
  const repo = new InMemoryPedidoRepository();
  const crearPedido = new CrearPedidoService(repo);

  await crearPedido.ejecutar('341', 'Pedido de Comida', 250);
}

main();
