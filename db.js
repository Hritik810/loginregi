const mongoose = require("mongoose")


// const MongoUrl = "mongodb+srv://sanskarr:password@rooms.ppih7.mongodb.net/?retryWrites=true&w=majority"
const  MongoUrl  = "mongodb+srv://Login78:Login%4078@cluster0.oa6p79e.mongodb.net/?retryWrites=true&w=majority"



const InitiateMongoServer = async ()=>{
    try{
        await mongoose.connect(MongoUrl,{
            useNewUrlParser:true
        });
        console.log("connected to db")
    }
    catch(e){
        console.log(e)
        throw e
    }
}

module.exports = InitiateMongoServer
