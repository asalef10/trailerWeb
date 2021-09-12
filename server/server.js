const dotenv = require('dotenv')
dotenv.config()
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const cors = require('cors')
app.use(cors())
const DB = require('./DB/index')
const userRouter = require('./rauting/userRauting')
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.listen(PORT || 8080, (err) => {
  if (err) console.log(err);
  console.log('work');
});


app.use('/user',userRouter)
if (process.env.NODE_ENV === 'production') {
  //NODE_ENV משתנה סביבה מובנה
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('Api running');
  });
}
