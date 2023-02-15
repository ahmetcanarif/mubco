const httpStatus = require('http-status');
const { list, insert, updateById, deleteById, findById } = require('../services/student');

const studentList = (req,res) =>{
   list().then(result =>{
    return res.json({
        status:true,
        message:'Öğrenci listesi başarıyla getirildi',
        data:result
    })
   }).catch(e=>{
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        status:false,
        message:e.message
    })
   });
};

const insertStudent = (req,res) =>{
   insert(req.body).then(() => {
        return res.status(httpStatus.CREATED).json({
            status:true,
            message:'Öğrenci ekleme işlemi başarılı.'
        });
    }).catch(err =>{
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status:false,
            message:err.message
        })
    });
};

const updateStudent = (req,res) => {
    findById(req.params.id).then(data =>{
        if(!data) {
            return res.status(httpStatus.BAD_REQUEST).json({
                status:false,
                message:'Sistemimizde böyle bir öğretmen bulunmamaktadır.'
            })
        }else{
            updateById(req.params.id,req.body).then((result) => {
                res.status(httpStatus.CREATED).json({
                    status:true,
                    message:'Öğrenci güncelleme işlemi başarılı.',
                    data:result
                });
            }).catch(err =>{
                res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                    status:false,
                    message:err.message
                })
            });
        }
    }).catch(err =>{
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status:false,
            message:err?.message
        })
    });
    
};

const deleteStudent = (req,res) => {
    findById(req.params.id).then(data =>{
        if(!data) {
            return res.status(httpStatus.BAD_REQUEST).json({
                status:false,
                message:'Sistemimizde böyle bir öğretmen bulunmamaktadır.'
            })
        }else{
            deleteById(req.params.id,req.body).then((result) => {
                res.status(httpStatus.CREATED).json({
                    status:true,
                    message:'Öğrenci silme işlemi başarılı.',
                    data:result
                });
            }).catch(err =>{
                return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                    status:false,
                    message:err.message
                })
            });
        }
    }).catch(err =>{
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status:false,
            message:err?.message
        })
    });
};

const getStudentById = (req,res) => {
    findById(req.params.id,req.body).then((result) => {
        return res.status(httpStatus.CREATED).json({
            status:true,
            message:'Öğrenci detayı başarıyla getirildi.',
            data:result
        });
    }).catch(err =>{
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status:false,
            message:err.message
        })
    });
};

module.exports = {
    studentList,
    insertStudent,
    updateStudent,
    deleteStudent,
    getStudentById
}