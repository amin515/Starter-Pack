import customError from "../Controllers/createCustomError.js"
import jwt from 'jsonwebtoken';


export const authMiddleWare = (req, res, next) => {

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

    // if valid user
    if( login_user ){
        req.user = login_user;
        next();
    }

    } catch (error) {
        next(error)
    }
}