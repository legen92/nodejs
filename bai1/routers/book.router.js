const express = require("express");
const db = require("../models/index");
const Books = require('../controllers/book.controller');
const verifyToken = require('../middleware/verifyToken')
const {faker} = require('@faker-js/faker') 


const bookRouter = express.Router();
// get all books
bookRouter.get("/",Books.getAllBooks);

//get one book

bookRouter.get('/:id',Books.getOneBook)

//create one book
bookRouter.post('/',Books.createOneBook)

//update one book 
bookRouter.put('/:id',Books.updateOneBook)

//delete one book
bookRouter.delete('/:id',Books.deleteOneBook)

bookRouter.post('/fake',(req,res)=>{
    const product = faker.commerce.product()
    console.log(product)
    res.json('ok')
})


module.exports = bookRouter;
