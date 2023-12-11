import { CacheClient } from 'quickmart-shared-service'
import { UserData } from '../@entity'
import { Redis } from 'ioredis'
import Config from '../config'

const redisHost = Config.NODE_ENV === 'development' ? 'localhost' : 'redis-service'
console.log('[REDIS] redisHost', redisHost)

let redis: Redis

function initializeRedis() {
  redis = new Redis({
    host: redisHost,
    port: 6379,
    connectTimeout: 5000, // Adjust timeout as needed
  })

  redis.on('connect', () => {
    console.log('[REDIS] Connected to Redis successfully')
  })

  redis.on('error', (error) => {
    console.error('[REDIS] Error connecting to Redis:', error.message)
    throw new Error('[REDIS] Error connecting to Redis : ' + error.message)
  })

  return redis
}

const redisCacheClient = new CacheClient(initializeRedis()) // pass the redis client in constructor

export const getUserById = async (id: string) => {
  const ID = `user:${id}`
  return redisCacheClient.get<UserData>(ID)
}

export const setUserById = async (id: string, data: UserData) => {
  const ID = `user:${id}`
  return redisCacheClient.set(ID, data)
}
