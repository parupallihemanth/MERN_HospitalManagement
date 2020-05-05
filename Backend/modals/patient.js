const mongoose = require('mongoose');
const crypto = require('crypto');
const uuidv1 = require('uuid/v1')

const patientSchema = new mongoose.Schema({

    name : {
        type: String,
        required : true,
        maxlength : 64,
        trim : true
    },

    email :{
        type: String,
        required : true,
        unique : true,
    },

    encry_password : {
        type: String,
        required : true,


    },
    salt: String,

    gender : {
        type: String,
        required : true,
        maxlength : 16

    },

    Appointment :{
        type : Array,
        default : []
    }

},
{
    timestamps : true
}
)


patientSchema.virtual("password")
             .set( function(password){
                 this._password = password
                 this.salt = uuidv1();
                 this.encry_password = this.securePassword(password);
             })
             .get(function(){
                 return this._password
             })

patientSchema.methods = {
    authenticate : function(plainPassword){
        return this.securePassword( plainPassword) === this.encry_password
    },

    securePassword : function(plainPassword){
        if(!plainPassword){
            return ""
        }

        try{
            return crypto.createHmac('sha256', this.salt)
            .update(plainPassword)
            .digest('hex')
        }
        catch(err){
            return ""
        }
    }
}


module.exports = mongoose.model( 'Patient', patientSchema)