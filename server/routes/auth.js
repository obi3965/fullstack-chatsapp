const express = require('express');
const { signUp, signIn,logout, allUsers } = require('../controllers/authController');
const { protectedUser } = require('../middleware/auth');




const router = express.Router()



 router.post('/', signUp)
 router.post('/signin', signIn)
 
 router.get('/',protectedUser, allUsers )


module.exports = router