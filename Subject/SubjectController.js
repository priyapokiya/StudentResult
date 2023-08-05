import subjectModel from "./SubjectModel.js"

class SubjectController{
   async addSubject(req,res){
        try {
            if(!req.body?.name){
                return res.status(400).send({message:"Missing dependancy Name"})
            }
            const result = await subjectModel.InsertSubject(req.body)
            if(!result){
                return res.status(500).send({message:"Somthing want Wrong"})
            }
            return res.status(200).send({message:"Success"})
        } catch (error) {
            return res.status(500).send({message:"Internal Server Error"})
        }
    }

    async getSubject(req,res){
        try {
            const subject = await subjectModel.user()
            if(subject) return res.status(200).send({message:"Success",subject})
            return res.status(500).send({message:"Somthing want Wrong"})
        } catch (error) {
            console.log(error);
            return res.status(500).send({message:"Internal Server Error"})
        }
    }
}

const subjectController = new SubjectController()
export default subjectController