const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema

const doctorAppointmentSchema = new mongoose.Schema({
    // About each doctor in appointment
    doctor : {
        type : ObjectId,
        ref : 'Doctor'
    },

    name : String,
    count : Number
})

const eachAppointment = mongoose.model('DoctorAppointmentSchema', doctorAppointmentSchema)

const appointmentSchema = new mongoose.Schema({

    appointments : [doctorAppointmentSchema],

    status : {
        type : String,
        default  : 'Received',
        enum : ["Received", "Confirmed", "Cancelled"]
    },

    updated : Date,

    patient : {
        type : ObjectId,
        ref : "Patient"
    }

})

const totalAppointments = mongoose.model("Appointments", appointmentSchema)

module.exports = { eachAppointment, totalAppointments }