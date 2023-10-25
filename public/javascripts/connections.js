const MongoClient = require('mongodb').MongoClient;
    url = "mongodb://localhost:27017/Wanderlust_DB",

    connection={};

connection.getConnection = function (){
    return MongoClient.connect( url,{"useNewUrlParser": true, useUnifiedTopology: true } ).then( ( database ) => database.db() )
}
module.exports=connection;

