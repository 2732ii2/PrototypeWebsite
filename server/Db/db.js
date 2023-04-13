import mongoose from "mongoose";
const connection=async()=>{
    try {
      const connection = await mongoose.connect(
        "mongodb://localhost:27017/Portotype_web_data",
        {
          useUnifiedTopology: true,
          useNewUrlParser: true,
        }
      );
      console.log("DB iS CONNECTED");
    } catch (err) {
      console.log("error in DB connection");
    }
}

export default connection;