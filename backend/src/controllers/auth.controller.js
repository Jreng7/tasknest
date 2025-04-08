import { User } from '../models/user.model'

export const register = (req, res) => {
  const { email, password, username } = req.body

  new User({ username, email, password })

  res.send('registrando...')
}

export const login = (req, res) => res.send('login')
