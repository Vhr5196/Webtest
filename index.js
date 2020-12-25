const express=require("express");//importing express module
const bodyParser=require("body-parser");
const app=express();//create an express object

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

  app.listen(3000,function(){
    console.log("server is up and running on 3000");

  });
