var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

//routes 
//get
router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
      //  console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//post

router.post("/burgers", function(req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function() {
        res.redirect("/");
    });
});


// put
router.put("/burgers/updateOne/:id", function(req, res){
    var condition = "id = " + req.params.id;

   // console.log("condition", condition);

    burger.updateOne({
        devoured: true
    }, condition, function(data) {
        res.redirect("/");
    });
});


module.exports = router;