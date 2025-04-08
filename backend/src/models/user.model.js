import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, trim: true, unique: true },
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true, select: false }
})

export const User = mongoose.model('User', userSchema)
