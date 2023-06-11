import jwt from 'jsonwebtoken'

export const createJWT = (user) => {
  const token = jwt.sign({
    id: user.id, 
    username: user.username,
  }, 
  process.env.JWT_SECRET)

  return token
}

export const protect = (req, res) => {
  //to authenticate we are setting the rule of passsing headers auth
  const bearer = req.headers.authorization
  // bearer token uses the word bearer before the token
  
  if(!bearer) {
    res.status(401) // code for no authorization
    res.json({message: 'not authorized'})
    return
  }

}