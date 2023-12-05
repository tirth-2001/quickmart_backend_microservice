export interface UserData {
  id: string
  name: string
  email: string
  role: UserRole
}

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest',
}

export type UserPayload = Partial<UserData>
