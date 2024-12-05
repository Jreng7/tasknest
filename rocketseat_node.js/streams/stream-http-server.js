import http from 'node:http'
import { Transform } from 'node:stream'

class NegativeOne extends Transform {
  _transform(chunk, encoding, callback){
    const data = Number(chunk.toString()) * -1
    console.log(data)
    callback(null, data.toString())
  }
}

const server = http.createServer(async (req, res) => {

  const buffers = []

  for await (const chunk of req) {
    buffers.push(chunk)
  }

  const fullBody = Buffer.concat(buffers).toString()

  return res.end(fullBody)

})

server.listen(3334)