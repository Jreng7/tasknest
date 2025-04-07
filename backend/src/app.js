// Core modules
import express from 'express'

// Config
import dotenv from 'dotenv'
dotenv.config()

// Middlewares de terceiros 
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

// Inicialização
const app = express()

// Middlewares globais
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())

export default app;