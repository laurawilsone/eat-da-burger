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

router.post("/burger", function(req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function() {
        res.redirect("/");
    });
});


// put
router.put("/burger/:id", function(req, res){
    var condition = "id = " + req.params.id;

   // console.log("condition", condition);

    burger.updateOne({
        devoured: true
    }, condition, function(data) {
        res.redirect("/");
    });
});

// delete
// router.delete("/burgers/:id", function(req, res) {
//     var condition = "id = " + req.params.id;

//     burger.delete(condition, function() {
//         res.redirect("/");
//     });
// });


module.exports = router;