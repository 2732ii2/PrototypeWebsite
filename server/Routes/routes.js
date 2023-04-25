import  express  from "express";
import User from "../Schema/Schema.js";
import jwt from "jsonwebtoken";
import cookie from "cookie-parser";


const route = express.Router();

const Maxage = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return (
    jwt.sign({ id }, "net ninja secret",
    {
      expiresIn: Maxage,
    })
  );
};


const submitdata = async (req, res) => {
    console.log("it's hits correctly");
    // console.log(req.body);
    const data=req.body;
    try{
        const Validate_user=User(data);
        const token = createToken(Validate_user._id);
        await Validate_user.save();
        console.log(Validate_user._id);
        console.log(token);
        res.send({ message: "everything is correct", token: token });
        // res.status(200).json({token});
        // res.cookie('jwt',token,{httpOnly:true,maxAge:Maxage*1000});
        console.log(Validate_user._id);
    }
    catch(e)
    {
        console.log("err");
    }
    

};

// const 


route.post('/submit',submitdata);



export default route;
