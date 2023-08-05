import studentModel from "./StudentModel.js"

class StudentController{
    async addStudent(req,res){
        try {
            let {name,std} = req.body
            if(!name) return res.status(400).send({message:"Missing dependancy name"})
            if(!std) return res.status(400).send({message:"Missing dependancy std"})
            const result = await studentModel.createStudent(req.body)
            if(result){
                return res.status(200).send({message:"Success"})
            }
            return res.status(500).send({message:"Somthing want Wrong"})
        } catch (error) {
            return res.status(500).send({message:"Internal Server Error"})
            
        }
    } 

    async getStudent(req,res){
        try {
            const student = await studentModel.user()
            if(student) return res.status(200).send({message:"Success",student})
            return res.status(500).send({message:"Somthing want Wrong"})
        } catch (error) {
            console.log(error);
            return res.status(500).send({message:"Internal Server Error"})
        }
    }

    
}

const studentController = new StudentController()
export default studentController