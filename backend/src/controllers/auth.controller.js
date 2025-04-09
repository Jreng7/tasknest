import { User } from '../models/user.model.js'
import bcrypt from 'bcryptjs'


export const register = async (req, res) => {

  const { email, password, username } = req.body

  try {

    // Gera Hash para senha.
    const passwordHash = await bcrypt.hash(password, 10)

    // Verifica se já existe um usuário com o mesmo e-mail ou username
    const existingUser = await User.findOne({ $or: [{ email}, {username}] })
    if (existingUser) {
      return res.status(400).json({ message: 'Email or username already in use.'})
    }

    // Cria o novo usuário
    const newUser = new User({ username, email, password: passwordHash })

    // Salva no banco
    const userSaved = await newUser.save()

    // Remove o password da resposta
    const userResponse = {
      _id: userSaved.id,
      email: userSaved.email,
      username: userSaved.username,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt
    }
    res.status(201).json(userResponse)
  } catch (err) {
    console.error('🔴 Error registering user:', err)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

export const login = (req, res) => res.send('login')
