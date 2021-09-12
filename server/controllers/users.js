const { usersModel, validUser, validLogin, genToken } = require('../module/userModol');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function addNewUser(req, res) {
  let validBody = validUser(req.body.user);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details[0].message);
  }
  try {
    await bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(req.body.user.Password, salt, (err, hash) => {
        if (err) throw err;
        req.body.user.Password = hash;
        usersModel.insertMany([req.body.user], (err, result) => {
          if (err) {
            res.json({ message: 'Email already in system order another problem' });
            throw err;
          }
          result[0].Password = '*********'; 
          res.json(result); 
        });
      });
    });
  } catch (err) { 
    console.log(err);
  }
}

async function Login(req, res) {
  try {
    let validBody = validLogin(req.body.user);
    if (validBody.error) {
      return res.status(400).json(validBody.error.details);
    }
    let user = await usersModel.findOne(
      { Email: req.body.user.Email },
      (error) => {
        if (error) throw error;
      }
    );
    if (!user) {
      res.json({ msg: 'Email not found' });
    }
    let PassValid = await bcrypt.compare(req.body.user.Password, user.Password);
    if (!PassValid) {
      return res.status(400).json({ msg: 'password not found' });
    }
    let newToken = genToken(user.id)
    user.Password = "****"
    res.json({id:newToken,user:user})
  } catch (error) {
    console.log(error);
  }
}
async function getUser(req, res) {
  try {
    const Email = req.body.user.Email;
    await usersModel.findOne({ Email }, (error, result) => {
      if (error) throw error;
      res.json(result);
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  addNewUser,
  getUser,
  Login,
};
