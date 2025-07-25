//domain/Pedido.ts
export class Pedido {
  constructor(
    public id: string,
    public descripcion: string,
    public total: number
  ) {}
}
