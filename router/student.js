const router = require('express').Router();
const { studentList, insertStudent, updateStudent, deleteStudent, getStudentById } = require('../controllers/student');
 

router.get('/students',studentList);
router.get('/student/:id',getStudentById)
router.post('/create-student',insertStudent);
router.patch('/update-student/:id',updateStudent);
router.delete('/delete-student/:id',deleteStudent);

module.exports = router;