import { User } from '../models/user.model.js'
import { createAcessToken } from '../libs/jwt.js'
import bcrypt from 'bcryptjs'

export const register = async (req, res) => {
  const { email, password, username } = req.body

  try {
    const passwordHash = await bcrypt.hash(password, 10)

    const existingUser = await User.findOne({ $or: [{ email }, { username }] })
    if (existingUser) {
      return res
        .status(400)
        .json({ message: 'Email or username already in use.' })
    }

    const newUser = new User({ username, email, password: passwordHash })
    const userSaved = await newUser.save()
    const token = await createAcessToken({ id: userSaved._id })

    res.cookie('token', token).json({
      _id: userSaved.id,
      email: userSaved.email,
      username: userSaved.username,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    })
  } catch (err) {
    console.error('🔴 Error registering user:', err)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

export const login = async (req, res) => {

  const { email, password } = req.body

  try {
    const userFound = await User.findOne({ email })
    if (!userFound) return res.status(400).json({ message: 'Email or username not found.' });

    const isMatch = await bcrypt.compare(password, userFound.password)
    if(!isMatch) return res.status(400).json({ message: 'Incorrect password.' })

    const token = await createAcessToken({ id: userFound._id })

    res.cookie('token', token, {
      httpOnly: true, // Bloqueia acesso via JS (previne XSS)
    }).json({
      _id: userFound.id,
      email: userFound.email,
      username: userFound.username,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    })
  } catch (err) {
    console.error('🔴 Error registering user:', err)
    return res.status(500).json({ message: 'Internal server error' })
  }
}