// REQUIRE PACKAGES
const express = require("express");
const erv = require('express-react-views');

// CREATE THE SERVER
const app = express();


// SET THE VIEW ENGINE
// Set the folder containing the view/templates `.jsx` files
app.set('views', __dirname + '/views');
// Set `express-react-views` as the view engine use for rendering HTML
app.set('view engine', 'jsx');
app.engine('jsx',  erv.createEngine() );


// MIDDLEWARE
app.use( express.static('public') );


// ROUTES
app.get('/home', (req, res, next) => {
  
  // res.sendFile(__dirname + '/views/home.html');

  res.render('Home')

})



// START THE SERVER
app.listen( 3000, () => {
  console.log("Server is listening on the port 3000");
});
