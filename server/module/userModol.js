const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const joi = require('joi')
const jwt = require('jsonwebtoken')
const userSchema = new Schema({
  Email: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
exports.usersModel = mongoose.model('users', userSchema)

exports.genToken = (userID) =>{
  let token = jwt.sign({id:userID},'asiNetflix',{expiresIn:"60mins"} )
  return token
}

exports.validUser = (bodyData) =>{
  let joiSchema = joi.object({
    Email:joi.string().min(2).max(200).required(),
    Password:joi.string().min(2).max(99).required()
  })
return joiSchema.validate(bodyData)  
}
