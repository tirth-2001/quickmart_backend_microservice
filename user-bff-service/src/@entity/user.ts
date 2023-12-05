export interface UserData {
  id: string
  name: string
  status: UserRole
  orderDate: string
  createdBy: string
  productId: string[]
}

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest',
}

export type UserPayload = Partial<UserData>
