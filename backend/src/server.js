import server from './app.js'
import { connect } from './database/db.js'
import { port } from './config/config.js'

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

