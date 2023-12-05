import { UserData, UserRole } from '../@entity'

export const usersList: UserData[] = [
  {
    id: '1234',
    name: 'user1',
    email: 'user1@gmail.com',
    role: UserRole.ADMIN,
  },
  {
    id: '1122',
    name: 'user2',
    email: 'user2@gmail.com',
    role: UserRole.GUEST,
  },
]
