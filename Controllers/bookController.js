import BookModel from "../Models/bookModel.js";
import { isAdmin,isCustomer } from "./userController.js";

// add book
export function addBook(req,res){
    if(isAdmin(req)){
            BookModel.find({bookName:req.body.bookName}).then((books)=>{
        if(books.length==0){
            if(books.bookId==req.body.bookId){
                res.status(409).json({message:"Already has a book with same bookId"})
            }else{
                const newBook = new BookModel(req.body)

                newBook.save().then(()=>{
                    res.status(201).json({message:"Book added successfully"})
                }) 
            }
        }else{
            res.status(400).json({message:"Book registeration failed. book already have"})
        }
})
    }else{
        res.status(403).json({message:"You are not allow to add books"})
    }

}

// delete book
export function deleteBook(req,res){
    if(isAdmin(req)){
        const bookId = req.params.bookId
    BookModel.find({bookId:bookId}).then((books)=>{
        if(books.length==0){
            res.status(404).json({message:"Wrong book Id"})
            return;
        }else{
            const bookData= books[0];
            BookModel.deleteOne({bookId:bookData.bookId}).then(()=>{
                res.status(200).json({message:"Book deleted successfully"})
            })
        }
    })
    }else{
        res.status(403).json({message:"You are not allow to delete books"})
    }
    
}

// update book
export function updateBook(req,res){
    if(isAdmin(req)){
        const book = req.params.bookId
    BookModel.find({bookId:book}).then((books)=>{
        if(books.length==0){
            res.status(404).json({message:"Wrong book id"})
            return;
        }else{
            BookModel.updateOne({bookId:book},req.body).then(()=>{
                res.status(200).json({message:"Book updated successfully"})
            })
        }
    })
    }else{
        res.status(403).json({message:"You are not allow to update book details"})
    }
    
}

// get all books
export function getBooks(req,res){
    BookModel.find().then((bookList)=>{
        res.status(200).json({list:bookList})
    })
}

// get book by name
export function getBookByName(req,res){
    const book = req.params.bookName;
    BookModel.find({bookName:{$regex: book, $options:"i"}}).then((books)=>{
        if(books.length==0){
            res.status(404).json({message:"No books found. Please try another book name"})
            return;
        }else{
            res.status(200).json({bookList:books})
        }
    })
}

// get book by id
export function getBookById(req,res){
    const book = req.params.bookId;
    BookModel.find({bookId:book}).then((books)=>{
        if(books.length==0){
            res.status(404).json({message:"No books found. Please try another book id"})
            return;
        }else{
            res.status(200).json({bookList:books})
        }
    })
}