import  express, { Router }  from "express";
import subjectController from "./SubjectController.js";

const SubjectRouter = Router()

SubjectRouter.post("/insert",subjectController.addSubject)

SubjectRouter.get("/getsubject",subjectController.getSubject)

export default SubjectRouter