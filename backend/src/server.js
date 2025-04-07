import server from './app.js'

const port = process.env.PORT || 3033

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})