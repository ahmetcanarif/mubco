const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HomewWorksSchema = new Schema({
    work_name : {
        type:String,
        required:true
    },
    student_id : {
        type : mongoose.Types.ObjectId,
        ref : 'students',
    },
    teacher_id : {
        type : mongoose.Types.ObjectId,
        ref : 'teachers'
    }
},{ timestamps:true,versionKey: false });

module.exports = mongoose.model('home_works',HomewWorksSchema);