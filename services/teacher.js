const TeacherSchema = require('../models/Teacher');

const insert = (data) =>{
    const teacher = new TeacherSchema(data);
    return teacher.save()
}
const list = async () =>{
    return await TeacherSchema.find({});
}
const updateById = (id,data) =>{
    return TeacherSchema.findByIdAndUpdate(id,data,{new:true});
}
const deleteById = (id) => {
    return TeacherSchema.findByIdAndDelete(id,{new:true});
}
const findById = (id) =>{
    return TeacherSchema.findById(id);
};
module.exports = {
    insert,
    list,
    updateById,
    deleteById,
    findById
}
