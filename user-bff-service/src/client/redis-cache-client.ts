import { CacheClient } from 'quickmart-shared-service'
import { UserData } from '../@entity'
import { Redis } from 'ioredis'
import Config from '../config'

const redisHost = Config.NODE_ENV === 'development' ? 'localhost' : 'redis-service'
console.log('redisHost', redisHost)

const redis = new Redis({
  host: Config.NODE_ENV === 'development' ? 'localhost' : 'redis-service', // Kubernetes service name
  port: 6379,
})

const redisCacheClient = new CacheClient(redis) // pass the redis client in constructor

export const getUserById = async (id: string) => {
  const ID = `user:${id}`
  return redisCacheClient.get<UserData>(ID)
}

export const setUserById = async (id: string, data: UserData) => {
  const ID = `user:${id}`
  return redisCacheClient.set(ID, data)
}
