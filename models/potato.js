const mongoose = require("mongoose")
const potatoPriceSchema = mongoose.Schema({
    type: String,
    expdate: String,
    cost: Number
})
module.exports = mongoose.model("potato",
potatoPriceSchema)