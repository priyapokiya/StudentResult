import mongoose from "mongoose";

async function ConnectDB(){
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/student_result")
        console.log("DB Connected");
    } catch (error) {
        console.log("DB Connected Loss");
    }
}
export default ConnectDB