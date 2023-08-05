import  express  from "express";
import marksController from "./MarksController.js";

const MarksRouter = express.Router()

MarksRouter.post("/",marksController.addMarks)
MarksRouter.get("/:id",marksController.showResult)

export default MarksRouter