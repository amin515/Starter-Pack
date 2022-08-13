
import customError from "../Controllers/createCustomError.js"
import jwt from 'jsonwebtoken';


export const userMiddleWare = (req, res, next) => {

    // check token is authenticate or not
    const token = req.cookies.access_token
    try {
        
     if(!token){
        return next(customError(401, 'token not found'))
     }
     
     //if login user must have a valid token
     const login_user = jwt.verify(token, process.env.JWT_SECRET);

    //verify token authenticate or not

    if(!login_user){
        return next(customError(401, 'invalid token'))
    }
     
    if(login_user.id !== req.params.id){
        return next(customError(401, 'You can\'t access this action'))
    }
    // if valid user
    if( login_user ){
        req.user = login_user;
        next();
    }

    } catch (error) {
        next(error)
    }
}