import  express  from "express";
import studentController from "./StudentController.js";

const studentRouter = express.Router()

studentRouter.post("/insert",studentController.addStudent)
studentRouter.get("/getstudent",studentController.getStudent)

export default studentRouter