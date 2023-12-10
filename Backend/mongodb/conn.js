import mongoose from "mongoose"
mongoose.connect("mongodb://127.0.0.1:27017/Costumer_Relationship_System",{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    console.log("Connection Established")
}).catch((e)=>console.log("Connection Not Established...."))