import mongoose from "mongoose";
import {DB_NAME} from '../constants.js'


const connectDB = async ()=>{
    try {
         const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB Connected !! HostName : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log('MongoDB Connection Failed', error);
        process.exit(1)
    }
}



/*

(async()=>{
    try {
       await mongoose.connect(`process.env.MONGODB_URI/${DB_NAME}`)

       app.on(error,(error)=>{
        console.log(error);
       })

       app.listen((process.env.PORT),()=>{
        console.log(`App is Listening to port ${process.env.PORT}`);
       })
    } catch (error) {
        console.log('error: ', error);
    }
})();
*/

export default connectDB