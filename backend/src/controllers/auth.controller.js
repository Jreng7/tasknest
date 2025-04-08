import { User } from '../models/user.model.js'

export const register = async (req, res) => {

  const { email, password, username } = req.body

  try {
    const newUser = new User({ username, email, password })
    await newUser.save()
  } catch (err) {
    console.error(err)
  }
  return res.status(201).json(newUser)
}

export const login = (req, res) => res.send('login')
