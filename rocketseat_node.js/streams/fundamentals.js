
import { Readable, Writable, Transform } from 'node:stream'

class One extends Readable {
  
  index = 1

  _read(){

      const i = this.index++

      setTimeout(() => {
        if(i > 10) {
        this.push(null)
        } else {
        this.push(Buffer.from(String(i)))
      }
    }, 300)   
  }
}

class NegativeOne extends Transform {
  _transform(chunk, encoding, callback){
    const data = Number(chunk.toString()) * -1
    callback(null, data.toString())
  }
}

class OneTen extends Writable {
  _write(chunk, encoding, callback){
    const number = Number(chunk.toString() * 10)
    console.log(number)
    callback()
  }
}


new One()
  .pipe(new NegativeOne())
  .pipe(new OneTen())