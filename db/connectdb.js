import mongoose from "mongoose";

const connectDb = async (DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
            dbName: "school"
        };
        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log("Connection Successfully");
    } catch (error) {
        console.log(`ERROR:- ${error.message}`);
    }
}

export default connectDb;