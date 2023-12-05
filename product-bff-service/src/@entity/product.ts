export interface ProductData {
  id: string
  name: string
  orderDate: string
  createdBy: string
  productId: string[]
}

export type ProductPayload = Partial<ProductData>
