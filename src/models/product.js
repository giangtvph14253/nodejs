import mongoose, {Schema} from "mongoose";

const productSchema = new Schema ({
    name:{
        type: String,
        minlength: 5,
        required
    }
})