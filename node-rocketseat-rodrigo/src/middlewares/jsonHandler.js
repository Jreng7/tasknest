
export async function jsonHandler(){
  
  const bancoDeDados = []

  for await (const chunk of request){
    bancoDeDados.push((Buffer.concat(chunk).toString()))
  }

}