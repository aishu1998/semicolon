// // const express = require("express");
// // const app = express();
// // const cors = require("cors");
// // const bodyparser = require("body-parser");
// // const mongoose = require("mongoose");
// // const todoRoutes = express.Router();
// // const PORT = 4000;

// // let Todo = require("./todo.model");

// // app.use(cors());
// // app.use(bodyparser.json());

// // mongoose.connect(
// //   "mongodb+srv://sriramkailash:atlas123.@cluster0-a4v1t.mongodb.net/test?retryWrites=true",
// //   { useNewUrlParser: true }
// // );
// // const connection = mongoose.connection;
// // connection.once("open", function() {
// //   console.log("mongodb connection was established successfully");
// // });

// // todoRoutes.route("/").get(function(req, res) {
// //   Todo.find(function(err, todos) {
// //     if (err) {
// //       console.log(err);
// //     } else {
// //       res.json(todos);
// //     }
// //   });
// // });

// // app.use("/todos", todoRoutes);

// // app.listen(PORT, function() {
// //   console.log("app listening to port " + PORT);
// // });

// var express = require("express");
// var app = express();
// var mongoose = require("mongoose");
// var schema = mongoose.Schema;

// mongoose.connect(
//   "mongodb+srv://sriramkailash:atlas123.@cluster0-a4v1t.mongodb.net/semicolon?retryWrites=true",
//   { useNewUrlParser: true }
// );
// const connection = mongoose.connection;
// connection.on("connected", function() {
//   console.log("hbhg");
// });

// var buss = schema({
//   busId: String,
//   busName: String
// });

// var busmodel = mongoose.model("busmodel", buss);

// // var data1 = new busmodel({ busId: 11, busName: "Anupanadi" });
// // console.log(data1.busName);

// // var data2 = new busmodel({ busId: "21", busName: "Mattuthavani" });
// // console.log(data2.busName);

// // var data3 = new busmodel({ busId: "13", busName: "Periyar" });
// // console.log(data3.busName);

// // var data4 = new busmodel({ busId: "12", busName: "Nilayur" });
// // console.log(data4.busName);

// // busmodel.create(function(err) {
// //   if (err) console.log(err);
// //   else console.log("done");
// // });

// // busmodel.find({}, function(err, result) {
// //   if (err) throw err;
// //   console.log(result);
// // });

// // var MongoClient = require("mongodb").MongoClient;
// // var url =
// //   "mongodb+srv://sriramkailash:atlas123.@cluster0-a4v1t.mongodb.net/test?retryWrites=true";
// // var str = "";
// // app.get("/aa", function(req, res) {

// //});

// // mongoose.connect(
// //   "mongodb+srv://sriramkailash:atlas123.@cluster0-a4v1t.mongodb.net/test?retryWrites=true",
// //   { useNewUrlParser: true }
// // );
// // const connection = mongoose.connection;
// // connection.once("open", function() {
// //   console.log("mongodb connection was established successfully");
// // });

// // app.get("/", function(req, res) {
// //   res.send("semicolon");
// // });

// // app.get("/semicolon", function(req, res) {
// //   res.send("jhjhgfyudgy");
// // });

// // app.get("/form", function(req, res) {
// //   res.sendFile(
// //     "/home/aiswarya/Documents/programming/mern/todobackend/index.html"
// //   );
// // });

// app.listen(4000, function() {
//   console.log("Listening on port 4000");
// });

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://sriramkailash:atlas123.@cluster0-a4v1t.mongodb.net/";

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("semicolon");
  dbo.createCollection("conductor", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");

    var data1 = [
      {
        conductorName: "Raja",
        conductorPassword: "raja123",
        conductorEmail: "raja@gmail.com",
        conductorPhoneNo: 9876543210
      },
      {
        conductorName: "Kumar",
        conductorPassword: "kumar123",
        conductorEmail: "kumar@gmail.com",
        conductorPhoneNo: 8765432109
      },
      {
        conductorName: "Muthu",
        conductorPassword: "muthu123",
        conductorEmail: "muthu@gmail.com",
        conductorPhoneNo: 7654321098
      },
      {
        conductorName: "Mohemmad",
        conductorPassword: "mohemmad123",
        conductorEmail: "mohemmad@gmail.com",
        conductorPhoneNo: 7654321097
      },
      {
        conductorName: "Rama",
        conductorPassword: "rama123",
        conductorEmail: "rama@gmail.com",
        conductorPhoneNo: 6543210987
      },
      {
        conductorName: "Dharman",
        conductorPassword: "dharman123",
        conductorEmail: "dharman@gmail.com",
        conductorPhoneNo: 5432109876
      },
      {
        conductorName: "Kannan",
        conductorPassword: "kannan123",
        conductorEmail: "kannan@gmail.com",
        conductorPhoneNo: 4321098765
      },
      {
        conductorName: "Ravi",
        conductorPassword: "ravi123",
        conductorEmail: "ravi@gmail.com",
        conductorPhoneNo: 2109876543
      },
      {
        conductorName: "Selvam",
        conductorPassword: "selvam123",
        conductorEmail: "selvam@gmail.com",
        conductorPhoneNo: 1098765432
      },
      {
        conductorName: "Gopal",
        conductorPassword: "gopal123",
        conductorEmail: "gopal@gmail.com",
        conductorPhoneNo: 0987654321
      },
      {
        conductorName: "Sathish",
        conductorPassword: "sathish123",
        conductorEmail: "sathish@gmail.com",
        conductorPhoneNo: 8876543210
      }
    ];

    dbo.collection("stop").insertMany(data1);

    // dbo
    //   .collection("stop")
    //   .find({})
    //   .toArray(function(err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //   });

    // var oldval = { stopName: "tpk" };
    // var newval = { $set: { stopId: 2, stopName: "thirupankundram" } };
    // dbo.collection("stop").updateOne(oldval, newval, function(err, res) {
    //   if (err) throw err;
    //   console.log("one item updated");
    // });

    db.close();
  });
});
