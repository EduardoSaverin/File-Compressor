var express = require("express");
var app = express();
var router = express.Router();

//Set View
app.set("view engine","ejs");

router.get("/",function(req,res){
  res.render("index");
});

app.use(express.static("./public"));
app.use(router);
app.listen(3000);
console.log("Listening on 3000");
