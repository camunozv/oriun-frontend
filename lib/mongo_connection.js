import mongoose from "mongoose";

export async function connectToDataBase()
{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Succesfully connected to database.");
    } catch(error)
    {
        console.log("Error while connecting to the database.");
    }
}
