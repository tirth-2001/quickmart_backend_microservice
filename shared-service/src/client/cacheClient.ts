import { Redis } from 'ioredis'

interface CacheOptions {
  expireInSeconds?: number
}

export class CacheClient {
  private redisClient: Redis

  constructor(redisClient: Redis) {
    this.redisClient = redisClient
  }

  async set(key: string, value: any, options?: CacheOptions): Promise<void> {
    const stringValue = JSON.stringify(value)

    if (options?.expireInSeconds) {
      await this.redisClient.setex(key, options.expireInSeconds, stringValue)
    } else {
      await this.redisClient.set(key, stringValue)
    }
  }

  async get<T>(key: string): Promise<T | null> {
    const result = await this.redisClient.get(key)

    if (result) {
      return JSON.parse(result)
    }

    return null
  }

  async del(key: string): Promise<void> {
    await this.redisClient.del(key)
  }
}
