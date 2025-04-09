// config/config.js
import dotenv from 'dotenv'
dotenv.config()

export const port = {
  port: process.env.PORT || 3000,
}

export const config = {
  databaseUrl: process.env.DATABASE_URL || ''
}

export const secret = {
  key: process.env.KEY_SECRET || ''
}