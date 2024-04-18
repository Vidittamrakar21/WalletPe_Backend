import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema ({

    totalmoney : String,
    transactions: {type: [String], default: []},
    name: String,
    email: String,
    phone: Number,
    upiid: String,
    date: {type : Date, default: Date.now}
})

module.exports = mongoose.model('users', userSchema);