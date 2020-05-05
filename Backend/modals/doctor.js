const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema

const doctorSchema = new mongoose.Schema({
    name : {
        type : String,
        maxlength : 64,
        required: true
    },

    description : {
        type : String,
        maxlength : 2000,
        required : true
    },

    gender : {
        type: String,
        maxlength : 16
    },

    department : {
        type : ObjectId,
        ref: 'Department',
        required : true

    },

    photo : {
        data : Buffer,
        contentType : String
    }
},
{
    timestamps : true
})


module.exports = mongoose.model('Doctor', doctorSchema)