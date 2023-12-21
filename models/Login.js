const mongoose = require('mongoose');

const jwt = require('jsonwebtoken');

const loginSchema = new mongoose.Schema({
  staffid: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },

  tokens:[
    {
      token:{
        type: String,
        required: true,
      }
    }
  ]
});


// // we are generating token
// loginSchema.methods.generateAuthToken = async function () {
//   try{
//     let token = jwt.sign({_id:this._id},process.env.JWT_SECRET);
//     this.tokens = this.tokens.concat({token:token});
//     await this.save();
//     return token;
//   }catch(err){
//     console.log(err)
//   }
// }

// >>>>>>> db1cd2a5ae3e20af285f7ca6708809391a7d4a59
const login = mongoose.model('login', loginSchema);

module.exports = login;
