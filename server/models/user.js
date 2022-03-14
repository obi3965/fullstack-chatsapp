const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken')
const crypto = require('crypto')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
       
    },
    email: {
        type: String,
        required: true,
        unique: true,
       
    },
    password: {
        type: String,
        required: true,
        
    },
    pic: {
        type: "String",
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    
    },
    role: {
        type: Boolean,
        default: false,
        required:true,
    },
    
  

},{timestamps:true})


//encrypt the password before saving user

userSchema.pre('save', async function (next)  {
    if(!this.isModified()){
        next()
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})



// Compare user password
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };


//to return JWT token
// userSchema.methods.getToken = function () {
//     return JWT.sign({id: this._id}, process.env.JWT_SECRET_KEY, {
//         expiresIn: process.env.JWT_EXPIRES_IN
//     })
// }



module.exports = mongoose.model('User', userSchema)