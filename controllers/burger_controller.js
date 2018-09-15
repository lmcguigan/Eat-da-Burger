//Require Express
var express = require("express");
//Set up Router
var router = express.Router();
//Import burger model to use its functions
var burger = require("../models/burger.js");

//use router instead of circular dependency
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var handlebarsObject = {
            burgers: data
        };
        res.render("index", handlebarsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    console.log("=====POST - REQ.BODY=====");
    console.log(req.body)
    burger.insertOne(req.body.burger_name, function(result) {
        // Send back the ID of the new burger
        res.json({ id: result.insertId });
      });
});

router.put("/api/burgers/:id", function (req, res) {
    console.log("=====PUT - REQ.PARAMS=====");
    console.log(req.params)
    var idVal = req.params.id;
    console.log(req.body);
    var timeEaten = req.body.timeEaten;
    burger.updateOne(timeEaten, idVal, function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
      }
    );
});

//export the router to use in server.js file
module.exports = router;