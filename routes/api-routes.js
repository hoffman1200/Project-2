// Requiring our models and passport as we've configured it
const db = require("../models");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  

  // Route for getting some data about our user to be used client side
  

  app.post("/api/activity", (req, res) => {
    console.log("Post api activity", req.body);
    console.log("This should be something", db.activity);
    db.activity.create({
      title: req.body.title,
      //category: req.body.category,
      description: req.body.description,
      date: req.body.date,
      address: req.body.address
    })
      .then((newActivity) => {
        res.json(newActivity);
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });
  
};
