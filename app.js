const express =require("express");
var MongoClient = require('mongodb').MongoClient;
//pivan menjao


var url = "mongodb+srv://Ivan:javolimtatu2@partymode-hxqit.gcp.mongodb.net/test?retryWrites=true&w=majority";

var app = express();
app.set("view engine", "ejs");
app.use(express.static((__dirname, './css')));



app.get("/",(req,res)=>{
    res.render("home")
})
app.get("/insert",(req,res)=>{
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("Party");
        var myobj = { name: "Company Inc", address: "Highway 37" };
        dbo.collection("Party").insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          db.close();
        });
      });
      
})


app.listen(3000,()=>{
    console.log("startovan server");
})