import jwt from 'jsonwebtoken'
import { secret } from '../config/config.js'

export function createAcessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, secret.key, { expiresIn: '1d'}, (err, token) => {
      if (err) reject(err);
      resolve(token)
    })
  })
}