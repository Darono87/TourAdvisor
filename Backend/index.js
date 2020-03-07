var express = require("express");

var application = express();

application.get("/",(req,res)=>{
    res.send("Backend test");
});

application.listen(3000);