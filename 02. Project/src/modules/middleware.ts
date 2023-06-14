import { validationResult } from 'express-validator'

export const handleInputErrors = (req, res, next) => {
  const errors = validationResult(req)
  console.log(errors);
  
  if(!errors.isEmpty()) {
    res.status(400) //you didnt send the right thing
    res.json({errors: errors.array()})
  } else {
    next()
  }
}