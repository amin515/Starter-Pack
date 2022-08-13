
import mongoose from 'mongoose';

const connectmongoDB = async () => {

    try{
      
        let connect = await mongoose.connect(process.env.MONGO_STRING)
        console.log(`MongoDB connect with Host ${connect.connection.host}`.bgCyan.black)
    }catch(error){
        console.log(error)
    }
}
export default connectmongoDB;