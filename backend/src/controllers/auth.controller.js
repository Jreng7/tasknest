import { User } from '../models/user.model.js'
import { createAccessToken } from '../libs/jwt.js'
import bcrypt from 'bcryptjs'

export const register = async (req, res) => {
  const { email, password, username } = req.body

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  try {
    const passwordHash = await bcrypt.hash(password, 10)

    const existingUser = await User.findOne({ $or: [{ email }, { username }] })
    if (existingUser) {
      return res
        .status(400)
        .json({ message: 'Email ou nome de usuário já cadastrado.' })
    }

    const newUser = new User({ username, email, password: passwordHash })
    const userSaved = await newUser.save()
    const token = await createAccessToken({ id: userSaved._id })

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax'
    }).json({
      _id: userSaved._id,
      email: userSaved.email,
      username: userSaved.username,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    })
  } catch (err) {
    console.error('🔴 Erro ao registrar usuário:', err)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

export const login = async (req, res) => {

  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'Email e senha são obrigatórios.' });
  }

  try {
    // Passo 1: Busca o usuário pelo email e verifica se existe
    const userFound = await User.findOne({ email })
    if (!userFound) return res.status(400).json({ message: 'Credenciais inválidas.' });

    // Passo 2: Compara a senha
    const isMatch = await bcrypt.compare(password, userFound.password)
    if(!isMatch) return res.status(400).json({ message: 'Credenciais inválidas.' })

    // Cria um token
    const token = await createAccessToken({ id: userFound._id })

    res.cookie('token', token, {
      httpOnly: true, // Mantenha sempre ativo (segurança básica)
      secure: process.env.NODE_ENV === 'production', // Só envia via HTTPS (obrigatório em produção)
      sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax' // Previne ataques CSRF
    }).json({
      _id: userFound._id,
      email: userFound.email,
      username: userFound.username,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    })
  } catch (err) {
    console.error('🔴 Erro ao fazer login:', err)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

export const logout = async (req, res) => {
  
}