const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Comment = new Schema (
    {
        comment: {type: String, required: true},
        blog: {type: String, required: true}
    },
    {timestamps:true},
)

module.exports = mongoose.model("comments", Comment)