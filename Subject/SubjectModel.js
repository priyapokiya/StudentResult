import mongoose from "mongoose";

class SubjectModel{
    constructor(){
        this.schema = new mongoose.Schema({
            name:({type:String,require:true,unique:true})
        })
        this.subject = mongoose.model("tbl_subject",this.schema)
    }
    InsertSubject(data){
        return this.subject.create(data)
    }
    user(){
        return this.subject.find({})
    }
}

const subjectModel = new SubjectModel()
export default subjectModel