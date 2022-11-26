const mongoose = require("mongoose");

// const host ="127.0.0.1";
// const port = "27017";
// const db = "dbpoporo";

exports.mongoConnect = async () => {
    const mongoStringConnection = "mongodb+srv://admin:admin@cluster0.ogxdz8m.mongodb.net/dbpoporo"
    try {
      await mongoose.connect(mongoStringConnection)
      console.log("db online")
    } catch (error) {
      console.log(error);
      throw new Error("Couldn't connect to Mongo")

    }


  //  const mongoStringConnection = `mongodb://${host}:${port}/${db}`; 
    
    // mongoose.connect(mongoStringConnection);
    // mongoose.Promise = global. Promise;
    // const dbConnection = mongoose.connection;
    // dbConnection.on("error", console.error.bind(console, "Mongodb conection error"))

}