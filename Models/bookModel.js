import mongoose from "mongoose";

const BookSchema = mongoose.Schema({
    bookId:{
        type:Number,
        required:true,
        unique:true
    },
    bookName:{
        type:String,
         required:true
    },
    description:{
        type:String,
         required:true
    },
    pages:{
        type:Number,
         required:true
    },
    author:{
        type:String,
         required:true
    },
    price:{
        type:Number,
         required:true
    },
    available:{
        type:Boolean,
         required:true
    }

})

const BookModel = new mongoose.model('books',BookSchema)

export default BookModel





