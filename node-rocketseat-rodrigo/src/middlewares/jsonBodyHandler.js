
export async function jsonBodyHandler(request, response){
  
  const bancoDeDados = []

  for await (const chunk of request){
    bancoDeDados.push((Buffer.concat(chunk).toString()))
  }

  try {
    request.body = JSON.parse(bancoDeDados)
  } catch {
    request.body = null
  }

}