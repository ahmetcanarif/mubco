var ObjectId = require('mongoose').Types.ObjectId; 

const HomeWorks = require('../models/HomeWorks');

const insert = (data) =>{
    const home_works = new HomeWorks(data);
    return home_works.save()
}
const list = async () =>{
    return await HomeWorks.find({})
    .populate({ 
        path : "teacher_id",
        select : "teacher_name teacher_surname teacher_area"
    })
    .populate({
        path : "student_id",
        select : "student_name student_surname student_class"
    });
}
const updateById = (id,data) =>{
    return HomeWorks.findByIdAndUpdate(id,data,{new:true}).populate({ 
        path : "teacher_id",
        select : "teacher_name teacher_surname teacher_area"
    })
    .populate({
        path : "student_id",
        select : "student_name student_surname student_class"
    });
}
const deleteById = (id) => {
    return HomeWorks.findByIdAndDelete(id,{new:true});
}
const findById = (id) =>{
    return HomeWorks.findById(id).populate({ 
        path : "teacher_id",
        select : "teacher_name teacher_surname teacher_area"
    })
    .populate({
        path : "student_id",
        select : "student_name student_surname student_class"
    });
}; 
const getStudentsWorks = (id) => {
    return HomeWorks.find({student_id:new ObjectId(id)})
    .populate({ 
        path : "teacher_id",
        select : "teacher_name teacher_surname teacher_area"
    })
    .populate({
        path : "student_id",
        select : "student_name student_surname student_class"
    });
}
const getGivenTeacherWorks = (id) => {
    return HomeWorks.find({teacher_id:new ObjectId(id)})
    .populate({ 
        path : "teacher_id",
        select : "teacher_name teacher_surname teacher_area"
    })
    .populate({
        path : "student_id",
        select : "student_name student_surname student_class"
    });
}
module.exports = {
    insert,
    list,
    updateById,
    deleteById,
    findById,
    getStudentsWorks,
    getGivenTeacherWorks
}
