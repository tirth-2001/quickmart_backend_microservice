export interface OrderData {
  id: string
  name: string
  status: OrderStatus
  orderDate: string
  createdBy: string
  productId: string[]
}

export enum OrderStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
}

export type OrderPayload = Partial<OrderData>
