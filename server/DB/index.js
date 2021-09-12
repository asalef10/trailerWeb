const connectMongoose = require('mongoose')
const urlMongo = process.env.CONNECTION_URL
connectMongoose.connect(urlMongo,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{console.log('you connected to DataBase')})
.catch(()=>{console.log('not connect to DataBase');})
module.exports = connectMongoose.connection 