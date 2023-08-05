import mongoose from "mongoose";

class StudentModel{
    constructor(){
        this.schema = new mongoose.Schema({
            name:{type:String,required:true},
            std:{type:Number,required:true}
        })
        this.student = mongoose.model("tbl_students",this.schema)
    }
    createStudent(data){
        return this.student.create(data)
    }
    user()
    {return this.student.find({})}
}

const studentModel = new StudentModel()
export default studentModel