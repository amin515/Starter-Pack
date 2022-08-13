
import express from 'express';
import { createStudent, deleteStudent, getAllStudents, getSingleStudent, updateStudent } from '../Controllers/StudentControlers.js';


// create student router
const router = express.Router();

router.get('/', getAllStudents);
router.get('/:id', getSingleStudent);


router.post('/', createStudent);
router.put('/:id', updateStudent);
router.patch('/:id', updateStudent);
router.delete('/:id', deleteStudent);


export default router;
