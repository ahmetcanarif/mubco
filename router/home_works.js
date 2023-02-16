const router = require('express').Router();
const { workList, insertWork, updateWork, getWorkById, deleteWork, studentsWorks, givenTeacherWorks, givenTeacherWorksToStudent } = require('../controllers/home_works');
 

router.get('/home-works',workList);
router.get('/home-work/:id',getWorkById)
router.get('/student-home-works/:student_id',studentsWorks);
router.get('/given-home-works/:teacher_id',givenTeacherWorks);
router.get('/given-home-work-teacher-to-student/:teacher_id/:student_id',givenTeacherWorksToStudent);
router.post('/create-home-work',insertWork);
router.patch('/update-home-work/:id',updateWork);
router.delete('/delete-home-work/:id',deleteWork);

module.exports = router;