const httpStatus = require('http-status');
const { list, insert, updateById, deleteById, findById, getStudentsWorks, getGivenTeacherWorks, getGivenTeacherWorksToStudent } = require('../services/home_works');

const workList = (req,res) =>{
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

const insertWork = (req,res) =>{
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

const updateWork = (req,res) => {
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

const deleteWork = (req,res) => {
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

const getWorkById = (req,res) => {
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

const studentsWorks = (req,res) =>{

    getStudentsWorks(req.params.student_id).then(data => {
        return res.status(httpStatus.OK).json({
            status:true,
            message:'Öğrencinin dersleri başarıyla getirildi.',
            data:data
        });
    }).catch(err =>{
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status:false,
            message:err?.message
        })
    });
}
const givenTeacherWorks = (req,res) =>{
    getGivenTeacherWorks(req.params.teacher_id).then(data => {
        return res.status(httpStatus.OK).json({
            status:true,
            message:'Öğretmen verdiği derseler başarıyla getirildi.',
            data:data
        });
    }).catch(err =>{
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status:false,
            message:err?.message
        })
    });
}
const givenTeacherWorksToStudent = (req,res) =>{
    getGivenTeacherWorksToStudent(req.params.teacher_id,req.params.student_id).then(data => {
        return res.status(httpStatus.OK).json({
            status:true,
            message:'Öğretmenin öğrenciye verdiği derseler başarıyla getirildi.',
            data:data
        });
    }).catch(err =>{
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status:false,
            message:err?.message
        })
    });
}


module.exports = {
    workList,
    insertWork,
    updateWork,
    deleteWork,
    getWorkById,
    studentsWorks,
    givenTeacherWorks,
    givenTeacherWorksToStudent
}