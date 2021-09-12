const userRouting = require('express').Router()
const userControllers = require('../controllers/users')
userRouting.post('/newUsers',userControllers.addNewUser)
userRouting.post('/getUser',userControllers.getUser)
userRouting.post('/Login',userControllers.Login)
module.exports = userRouting
 