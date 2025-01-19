
export function parseRoutePath(url){

  const regexParams = /:([a-zA-Z]+)/g
  const withParams = url.replaceAll(regexParams, "(?<$1>[a-z0-9-_]+)")
  const params = new RegExp(withParams)


  return params
}

