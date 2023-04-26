import  express  from "express";
import User from "../Schema/Schema.js";
import jwt from "jsonwebtoken";


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
    // res.setHeader
    // console.log(req.body);
    // res.cookie("jwt","ashad");
    const data=req.body;
    try{
      const Validate_user = User(data);
      const token = createToken(Validate_user._id);
      await Validate_user.save();
      console.log(Validate_user._id);
      console.log(token);
      // res.cookie("jwt", token, { maxAge: Maxage * 1000 });
      // httpOnly: true, res.status(201).json(Validate_user._id);
      await User.updateOne({ _id: Validate_user._id }, {"token":token});
      await Validate_user.save();
      res.send({ message: "everything is correct", token: token });
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
