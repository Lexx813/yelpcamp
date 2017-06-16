var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [{
    name: "Clouds rest",
    image: "https://farm7.staticflickr.com/6188/6106475454_cf4dab4d64.jpg",
    description: " blah blah blah",
}, {
    name: "yapalooza",
    image: "https://farm8.staticflickr.com/7457/9586944536_9c61259490.jpg",
    description: " blah blah blah",
}, {
    name: "no way jose",
    image: "https://farm6.staticflickr.com/5786/20607281024_5c7b3635cc.jpg",
    description: " blah blah blah",
}]

function seedDB() {
    Campground.remove({}, function(err) {
        if (err) {
            console.log(err);
        }
        console.log("removed campgrounds !");
    });
}

//add a few campgrounds
data.forEach(function(seed) {
    Campground.create(seed, function(err) {
        if (err) {
            console.log(err)
        } else {
            console.log("added a campground")
                //create a comment
            Comment.create({
                text: "this is place sucks",
                author: "cypher"
            }, function(err, comment) {
                if (err) {
                    console.log(err);
                } else {
                    Campground.comments.push(comment);
                    Campground.save();
                    console.log("created new comment");

                }

            });
        }


    });

});

//add a few comments




module.exports = seedDB;