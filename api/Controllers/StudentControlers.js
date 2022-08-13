
import Student from '../Models/studentsModel.js';
import bcrypt from 'bcryptjs';
import customError from './createCustomError.js';




/**
 * @access public
 * @method get 
 * @status get all students
 * @route /api/students
 */
 export const getAllStudents = async (req, res, next) => {
    
    try{
        const student = await Student.find()
        res.status(200).json(student)
    }catch(error){

        next(customError(404, 'Student data not found'));
       
    }
}



/**
 * @access public
 * @method get 
 * @status get single students
 * @route /api/students/id
 */
  export const getSingleStudent = async (req, res, next) => {

    const { id } = req.params;
    try{
        
        const student = await Student.findById(id)
        if(!student){
            next(customError(404, 'No single user found'))
        }
        if(student){
            res.status(200).json(
                student
            )
        }
    }catch(error){
        next(customError(404, 'Student data not found'));
    }
}


/**
 * @access public
 * @method post 
 * @status create students
 * @route /api/students
 */
  export const createStudent = async (req, res, next) => {

   // make hash password

   const salt = await bcrypt.genSalt(10);
   const hash_pass = await bcrypt.hash(req.body.password, salt);


    try{
    
        const student = await Student.create({ ...req.body, password : hash_pass});
        res.status(200).json(
            student
        )
    }catch(error){
        next(customError(404, 'Student data not found'));
    }
}

/**
 * @access public
 * @method put/patch 
 * @status update students
 * @route /api/students/id
 */
  export const updateStudent = async (req, res, next) => {
     const { id } = req.params;
    try{
        
        const student = await Student.findByIdAndUpdate(id, req.body,{
            new : true
        })
        res.status(200).json(
            student
        )
    }catch(error){
       
        next(customError(404, 'Student data not found'));
    }
}


/**
 * @access public
 * @method delete 
 * @status delete students
 * @route /api/students/id
 */
  export const deleteStudent = async (req, res, next) => {
    const { id } = req.params;
    try{
        
        const student = await Student.findByIdAndDelete(id)
        res.status(200).json(
            student
        )
    }catch(error){
        
        next(customError(404, 'Student data not found'));
    }
}

