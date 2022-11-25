import { Buffer } from 'node:buffer'
import process from 'node:process'
import GameMoney from '../index.js'

export default new GameMoney({
  project: Number(process.env.GM_PROJECT_ID),
  hmacPrivateKey: process.env.GM_HMAC_PRIVATE_KEY || '',

  // Optional. But to make checkouts must be specified
  rsaPrivateKey: Buffer
    .from(process.env.GM_RSA_PRIVATE_KEY || '', 'base64')
    .toString('utf-8')
})
