import jwt from 'jsonwebtoken'
import { secret } from '../config/config.js'

export function createAcessToken(payload) {
  // Gera um token usando id no payloud, secret e expiresIn para 1 dia.
  jwt.sign(payload, secret.key, { expiresIn: '1d'}, (err) => {
    if (err) console.error(err); // Finaliza a sentença; se não houver erro, pula para a próxima linha.
  })
}