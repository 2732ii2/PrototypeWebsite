import mongoose from "mongoose";



const Sehema=mongoose.Schema({
    'First Name':String,
    'LastName':String,
    'Email Address':String,
    'Phone(Optional)':String,
    'Password':String,
    'token':String
})
const User =new mongoose.model("User", Sehema);
export default User;