import { Readable } from 'node:stream'

class One extends Readable {

  index = 1

  _read(){

    const i = this.index++

    setTimeout(() => {
      if(i > 10){
        this.push(null)
      } else {
        const buff = Buffer.from(i.toString())
        this.push(buff)
      }
    }, 300)
  }

}


fetch('http://localhost:3334', {
  method: "POST",
  body: new One(),
  duplex: "half",
})