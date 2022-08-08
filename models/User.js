const mongoose=require('mongoose');


const {Schema}=mongoose;
const UserSchema=new Schema(
    {
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true,
        },
        date:{
            type:Date,
            default:Date.now
        },

    }
)
const User=mongoose.model('user',UserSchema);
User.createIndexes();// this will create seperate indexes
// module.exports=mongoose.model('modelName',schema to be imported)
module.exports=User;
