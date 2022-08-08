//  IN db.JS WE WROTE A FUNCTION THAT WILL CONNECT US TO THE DATABASE

const mongoose=require ("mongoose");
const mongoURI="mongodb+srv://prashant:prashant%40321@cluster0.aabiz.mongodb.net/notebook?retryWrites=true&w=majority"
const connectToMongo=()=>{

    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongodb...!");
    })
}


module.exports=connectToMongo; 