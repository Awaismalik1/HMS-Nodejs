const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema;



const patientDetails = mongoose.Schema({
    user: {
        type: ObjectId,
        required: true,
        ref: 'User',
    },
    lastName: {
        type: String
    },
    idNumber: {
        type: Number,
        required: false,

    },
    regDate: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    cell: {
        type: String
    },
    birthDate: {
        type: String
    },
    residence: {
        type: String
    },
    email: {
        type: String
    },
    guardian: {
        type: String
    },
    relation: {
        type: String
    },
    gender: {
        type: String,
        default: "Male",
        enum: ["Male", "Female"], // enum means string objects
        required: false,
    },
    statusPatient: {
        type: String,
        default: "Cured",
        enum: ["Cured", "Under Treatment"],
        required: true,
    },
    patientType: {
        type: String,
        default: "In Patient",
        enum: ["In Patient", "Out Patient"],
        required: true,
    },
    image: {
        type: String,
        required: false,
    },

})





module.exports = mongoose.model('patientDetails', patientDetails);