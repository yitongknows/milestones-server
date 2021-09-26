import mongoose, { Schema } from "mongoose";

const BlogSchema = new Schema({
    title: String,
    author: String,
    image: String,
    content: String,
    publish_date: Date,
});

module.exports = mongoose.model("Blog", BlogSchema);
