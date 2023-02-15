const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
    teacher_name : {
        type:String,
        required:true
    },
    teacher_surname : {
        type:String,
        required:true
    },
    teacher_area : {
        type : String,
        required:true
    }
},{ timestamps:true,versionKey: false });

module.exports = mongoose.model('teachers',TeacherSchema);