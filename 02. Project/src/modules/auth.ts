import jwt from 'jsonwebtoken'

export const createJWT = (user) => {
  const token = jwt.sign({
    id: user.id, 
    username: user.username,
  }, 
  process.env.JWT_SECRET)

  return token
}

export const protect = (req, res, next) => {
  //to authenticate we are setting the rule of passsing headers auth
  const bearer = req.headers.authorization
  // bearer token uses the word bearer before the token
  
  if(!bearer) {
    res.status(401) // code for no authorization
    res.json({message: 'not authorized'})
    return
  }

  const [, token] = bearer.split(' ')

  if (!token) {
    res.status(401) // code for no authorization
    res.json({message: 'not valid token'})
    return
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET)
    req.user = user
    next()
  } catch (e) {
    console.error(e)
    res.status(401)
    res.json({message: 'not valid token'})
    return
  }
}