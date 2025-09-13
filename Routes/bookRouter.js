import express from "express";
import { addBook,deleteBook,updateBook,getBookByName,getBooks, getBookById } from "../Controllers/bookController.js";

const bookRouter = new express.Router()
bookRouter.post('/add',addBook)
bookRouter.get('/view',getBooks)
bookRouter.get('/view/:bookName',getBookByName)
bookRouter.get('/:bookId',getBookById)
bookRouter.put('/:bookId',updateBook)
bookRouter.delete('/:bookId',deleteBook)

export default bookRouter;
