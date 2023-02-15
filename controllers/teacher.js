const httpStatus = require('http-status');
const { list, insert, updateById, deleteById, findById } = require('../services/teacher');

const teacherList = (req,res) =>{
   list().then(result =>{
    return res.status(httpStatus.OK).json({
        status:true,
        message:'Öğretmen listesi başarıyla getirildi',
        data:result
    })
   }).catch(e=>{
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        status:false,
        message:e?.message
    })
   });
};

const insertTeacher = (req,res) =>{
   insert(req.body).then(() => {
        return res.status(httpStatus.CREATED).json({
            status:true,
            message:'Öğretmen ekleme işlemi başarılı.'
        });
    }).catch(err =>{
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status:false,
            message:err?.message
        })
    });
};

const updateTeacher = (req,res) => {
    findById(req.params.id).then(data =>{
        if(!data){
            return res.status(httpStatus.BAD_REQUEST).json({
                status:false,
                message:'Sistemimizde böyle bir öğretmen bulunmamaktadır.'
            })
        }else{
            updateById(req.params.id,req.body).then((result) => {
                res.status(httpStatus.CREATED).json({
                    status:true,
                    message:'Öğretmen güncelleme işlemi başarılı.',
                    data:result
                });
            }).catch(err =>{
                res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                    status:false,
                    message:err?.message
                })
            });
        }
    }).catch(err =>{
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status:false,
            message:err?.message
        })
    });
   
};

const deleteTeacher = (req,res) => {
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
                    message:'Öğretmen silme işlemi başarılı.',
                    data:result
                });
            }).catch(err =>{
                res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                    status:false,
                    message:err?.message
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

const getTeacherById = (req,res) => {
    findById(req.params.id,req.body).then((result) => {
        return res.status(httpStatus.CREATED).json({
            status:true,
            message:'Öğretmen detayı başarıyla getirildi.',
            data:result
        });
    }).catch(err =>{
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status:false,
            message:err?.message
        })
    });
};

module.exports = {
    teacherList,
    insertTeacher,
    updateTeacher,
    deleteTeacher,
    getTeacherById
}