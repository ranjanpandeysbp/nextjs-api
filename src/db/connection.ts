import mongoose from "mongoose";

const dbConnection = async () => {
    try {
      await mongoose.connect(process.env.MONGOBD_URI, {family:4});
      console.log("DB Connected");
    } catch (error) {
        console.log(error);
    }
}
export default dbConnection;