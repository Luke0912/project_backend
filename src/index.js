// require('dotenv').config({path :'./env'})
import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Server is Listening at PORT ${process.env.PORT}`);
    })
}).catch((err)=>{
    console.log("mongodb connection failed");
})