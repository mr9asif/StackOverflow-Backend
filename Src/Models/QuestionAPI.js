const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "You have to give a title!"]
    },
    description: {
        type: String,
        required: [true, "You have to give a description!"]
    },
    tags: {
        type: String,
        required: [true, "You have to give tags!"]
    }
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
