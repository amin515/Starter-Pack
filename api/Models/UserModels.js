
import mongoose from "mongoose";



const userSchema = mongoose.Schema({

    name : {
        type : String,
        required : [true, 'name must be required'],
        unique : true,
        trim : true
    },
    email : {
        type : String,
        required : [true, 'email must be required'],
        unique : true,
        trim : true
    },
    cell : {
        type : String,
        required : true,
        unique : [true, 'cell must be required'],
        trim : true
    },
    username : {
        type : String,
        required : [true, 'username must be required'],
        unique : true,
        trim : true
    },
    age : {
        type : Number,
        required : true
    },
    gender : {
        type : String,
    },
    password : {
        type : String,
        required : true,
        trim : true
    },
    photo : {
        type : String,
    },
    isAdmin : {
        type : Boolean,
        default : false,
    },
    trash : {
        type : Boolean,
        default : false,
    },
    status : {
        type : Boolean,
        default : true,
    },
}, {
    timestamps : true
})

// export schema
export default  mongoose.model('Users', userSchema);