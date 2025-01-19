
export function parseRoutePath(path){

  const regexParams = /:([a-zA-Z]+)/g
  const withParams = path.replaceAll(regexParams, "(?<$1>[a-z0-9-_]+)")
  const params = new RegExp(withParams)


  return params
}

