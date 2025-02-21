import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 20
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 20
    },
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        min: 8,
        max: 20,
    },
    phoneNo: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        min: 10,
    }
});

const User = mongoose.model("User", userSchema);

export default User;