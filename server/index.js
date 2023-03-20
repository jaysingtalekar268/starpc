
const cors = require("cors");
const express = require('express');
const session = require("express-session");

require('./db/config');
const User = require("./db/user");
const app = express();
app.use(express.json());
app.use(cors());
app.use(session({saveUninitialized:true,
    resave:true,
     secret:"secret"}));
let userInfo={
    name:"",
    email:"",
    phone:""
}
app.post("/user",async (req,resp)=>{

    let user = new User(req.body);
    let result =   await user.save();
    resp.send(result);      
});

app.post("/signin",async (req,resp)=>{
    let fetchedData="";
    fetchedData = await User.findOne(req.body).select("-password -_id");
    if(fetchedData.name)
  { 
    userInfo={};
    req.session.userData=fetchedData;
    req.session.save();
    userInfo=fetchedData;
     resp.send(fetchedData);
   } else 
   {
    resp.send({result:"no user found"});
   }
    // resp.send(req.body);
}); 
app.post("/checkuser",async (req,resp)=>{
    
    resp.send(userInfo);
});
app.post("/signout",async (req,resp)=>{
    if(req.session.userData)
   { req.session.destroy();
    userInfo={};
    resp.send("logged out");

   }
   else
   {
    resp.send("No user loged in to kog out");
   }
});
app.listen(3001);