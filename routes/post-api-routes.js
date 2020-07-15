var db = require("../models");
const { sequelize } = require("../models");

module.exports = function(app) {

    //Route for getting all the posts
    app.get("/api/posts", function(req, res) {
        db.Post.findAll({}).then(function(data) {
            console.log('data', data);
            res.json(data);
        });
    });

      // POST route for saving a new post
    app.post("/api/posts", function(req, res) {
        db.Post.create(req.body).then(function(data) {
            console.log('data 2', data)
            res.json(data);
        });
    });

}