const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the records.
recordRoutes.route("/record").get(function (req, res) {
  let db_connect = dbo.getDb("AirlineReservation");
  db_connect
    .collection("flights")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a list of search records.
// recordRoutes.route("/searchrecord").get(function (req, res) {
//   let db_connect = dbo.getDb("AirlineReservation");
//   db_connect
//     .collection("flights")
//     .find(req.query)
//     .toArray(function (err, result) {
//       if (err) throw err;
//       res.json(result);
//     });
// });

// This section will help you get a single record by id
recordRoutes.route("/record/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("flights")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});


recordRoutes.route("/record/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    flight_from: req.body.flight_from,
    flight_to: req.body.flight_to,
    flightNum: req.body.flightNum,
    flight_date: req.body.flight_date,
    cabin: req.body.cabin,
    noSeats: req.body.noSeats,
    depTime: req.body.depTime,
    arrTime: req.body.arrTime,
    terminal: req.body.terminal,
  };
  db_connect.collection("flights").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  let newvalues = {
    $set: {
    flight_from: req.body.flight_from,
    flight_to: req.body.flight_to,
    flightNum: req.body.flightNum,
    flight_date: req.body.flight_date,
    cabin: req.body.cabin,
    noSeats: req.body.noSeats,
    depTime: req.body.depTime,
    arrTime: req.body.arrTime,
    terminal: req.body.terminal,
    },
  };
  db_connect
    .collection("flights")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("flights").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.status(obj);
  });
});

module.exports = recordRoutes;
