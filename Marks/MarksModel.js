import mongoose from "mongoose";

class MarksModel{
    constructor(){
        this.schema = new mongoose.Schema({
            marks:{type:Number,required:true},
            subject:{type:mongoose.Types.ObjectId,required:true,ref:"tbl_subjects"},
            student:{type:mongoose.Types.ObjectId,required:true,ref:"tbl_students"},
            totalMarks:{type:Number,require:true,default:100}
        })
        this.marks = mongoose.model("tbl_marks",this.schema)
    }
    InsertMarks(data){
        return this.marks.create(data)
    }
    
    GetResult(id){
        const pipline = [
            {
                $match:{student:new mongoose.Types.ObjectId(id)}
            },{
                $lookup:{
                    from:"tbl_subjects",
                    localField:"subject",
                    foreignField:"_id",
                    as:"subject"
                }
            },
            {
                $unwind:"$subject"
            },
            {
                $group:{
                    _id:"$student",
                    totalMarks:{
                        $sum:"$totalMarks"
                    },
                    archivedMarks:{
                        $sum:"$marks"
                    },
                    percentage:{
                        $avg:"$marks"
                    },
                    subject:{
                        $push:{
                            $mergeObjects:[{marks:"$marks"},{name:"$subject.name"}]
                        }
                    }
                }
            },
            {
                $lookup:{
                    from:"tbl_students",
                    localField:"_id",
                    foreignField:"_id",
                    as:"student"
                }
            },
            {
                $unwind:"$student"
            },
            {
                $project:{
                    _id:0
                }
            }
        ]
        return this.marks.aggregate(pipline)
    }
    user(){
        return this.marks.find({})
    }
}
const markModel = new MarksModel()
export default markModel