import mongoose from "mongoose";

//Define Schema
const studentSchema = mongoose.Schema({
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true },
    fees: {
        type: mongoose.Decimal128, required: true
    }
});

//Compile Schema
const studentModel = new mongoose.model("Student", studentSchema);

export default studentModel;