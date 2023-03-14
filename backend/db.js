const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/inotebook?directConnection=true&readPreference=primary&tls=false&appname=MongoDB%20Compass"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully")
    })
}

module.exports = connectToMongo;

