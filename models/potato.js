const mongoose = require("mongoose")
const potatoPriceSchema = mongoose.Schema({
    type: String,
    expdate: {String,length=10},
    cost: {
        type: Number,
        min: 0,
        max: 7,
    }
})
module.exports = mongoose.model("potato",
potatoPriceSchema)