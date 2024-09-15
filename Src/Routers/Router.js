
const express = require('express');
const Question = require('../Models/QuestionAPI');
const router = express.Router();

router.get('/questions', GetQuestion=(req, res)=>{
    res.status(201).send({
        message:"data get",
        data:Question
    })
})

module.exports= router;