const StudentSchema = require('../models/Student');

const insert = (data) =>{
    const student = new StudentSchema(data);
    return student.save()
}
const list = async () =>{
    return await StudentSchema.find({});
}
const updateById = (id,data) =>{
    return StudentSchema.findByIdAndUpdate(id,data,{new:true});
}
const deleteById = (id) => {
    return StudentSchema.findByIdAndDelete(id,{new:true});
}
const findById = (id) =>{
    return StudentSchema.findById(id);
};
module.exports = {
    insert,
    list,
    updateById,
    deleteById,
    findById
}
