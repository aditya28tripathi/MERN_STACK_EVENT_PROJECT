import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI,
     {dbName: "MERN_STACK_EVENT_MESSAGE"}).then(()=>{
        console.log("Connected");
    }).catch(error=>{
        console.log("Error occured in connecting the database",error);
    })
}