const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    student_name : {
        type:String,
        required:true
    },
    student_surname : {
        type:String,
        required:true
    },
    student_class : {
        type : String
    }
},{ timestamps:true,versionKey: false });

module.exports = mongoose.model('students',StudentSchema);