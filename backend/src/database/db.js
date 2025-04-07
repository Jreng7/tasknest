import mongoose from 'mongoose'
import config from '../config/config.js'

export async function connect() {

  try {
    await mongoose.connect(config.databaseUrl)
    console.log('🟢 Database connected successfully')
  } catch (err) { 
    console.error('🔴 Database connection error:', err)
    process.exit(1)
  }   

}