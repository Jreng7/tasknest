import server from './app.js'
import { connect } from './database/db.js'

const port = process.env.PORT || 3033

const start = async () => {
  try {
    await connect()
    server.listen(port, () => {
      console.log(`🚀 Server running at port ${port}`)
    })
  } catch(err) {
    console.error('❌ Failed to start the server due to DB error:', err)
    process.exit(1)
  }
}

start()

