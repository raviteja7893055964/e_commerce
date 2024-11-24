const mongoose =require("mongoose");

const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        // unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const CustomerModel = mongoose.model("employee", CustomerSchema)

module.exports = CustomerModel