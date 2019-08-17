var express    = require("express");
var  app = express();




app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/test",function(req,res){
 res.render("awareness");
});

app.listen(3000,function(req,res){
console.log("Start");
}) ;