const router = require('express').Router();
const { teacherList, insertTeacher, updateTeacher, getTeacherById, deleteTeacher } = require('../controllers/teacher');
 

router.get('/teachers',teacherList);
router.get('/teacher/:id',getTeacherById)
router.post('/create-teacher',insertTeacher);
router.patch('/update-teacher/:id',updateTeacher);
router.delete('/delete-teacher/:id',deleteTeacher);

module.exports = router;