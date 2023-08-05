import markModel from "./MarksModel.js";

class MarksController {
    async addMarks(req, res) {
        try {
            const { marks, student, subject } = req.body
            if (!marks) return res.status(400).send({ message: "Missing dependancy Marks" })
            if (!student) return res.status(400).send({ message: "Missing dependancy Student" })
            if (!subject) return res.status(400).send({ message: "Missing dependancy Subject" })

            const result = await markModel.InsertMarks(req.body)
            if (!result) return res.status(500).send({ message: "Somthing Want Wrong" })

            return res.status(200).send({ message: "Success" })

        } catch (error) {
            return res.status(500).send({ message: "Internal Server Error" })

        }
    }

   
    async showResult(req, res) {
        try {
            const { id } = req.params
            if (!id) return res.status(400).send({ message: "Missing dependancy id" })
            const result = await markModel.GetResult(id)
            if (result) return res.status(200).send({ message: "Success", result })
            if (!result) return res.status(500).send({ message: "Somthing Want Wrong" })

        } catch (error) {
            return res.status(500).send({ message: "Internal Server Error" })

        }
    }


    
}

const marksController = new MarksController()
export default marksController