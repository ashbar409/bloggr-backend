const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Comment = new Schema (
    {
        comment: {type: String, required: true},
        blog_id: {type: Schema.Types.ObjectId, ref: "blog_id"}
    },
    {timestamps:true},
)

module.exports = mongoose.model("comments", Comment)