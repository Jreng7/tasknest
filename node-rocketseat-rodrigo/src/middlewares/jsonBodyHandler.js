
export async function jsonBodyHandler(request){
  
  const bancoDeDados = []

  for await (const chunk of request){
    bancoDeDados.push(chunk)
  }

  try {
    request.body = JSON.parse(Buffer.concat(bancoDeDados).toString())
  } catch {
    request.body = null
  }

}