const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    authors: [String],
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    link: {
        type: String,
    }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
