const router = require('express').Router();
const { workList, insertWork, updateWork, getWorkById, deleteWork, studentsWorks, givenTeacherWorks } = require('../controllers/home_works');
 

router.get('/home-works',workList);
router.get('/home-work/:id',getWorkById)
router.get('/student-home-works/:student_id',studentsWorks);
router.get('/given-home-works/:teacher_id',givenTeacherWorks);
router.post('/create-home-work',insertWork);
router.patch('/update-home-work/:id',updateWork);
router.delete('/delete-home-work/:id',deleteWork);

module.exports = router;