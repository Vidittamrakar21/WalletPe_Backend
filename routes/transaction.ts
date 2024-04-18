import mongoose from "mongoose";

const Schema = mongoose.Schema;

const transactionSchema = new Schema ({

    tsc_id: String,
    uid: String,
    amt: String, 
    from: String,
    to: String,
    type: String,
    date: {type : Date, default: Date.now}
})

module.exports = mongoose.model('transactions', transactionSchema);