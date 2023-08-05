import  express  from "express";
import studentRouter from "./Student/StudentRouter.js";
import ConnectDB from "./Connection.js";
import SubjectRouter from "./Subject/SubjectRouter.js";
import MarksRouter from "./Marks/MarksRouter.js";

const app = express()
ConnectDB()
app.use(express.json())

app.get("/" , (req,res) =>{
    return res.status(200).send({message:"successfully"})
})

app.use("/student",studentRouter)
app.use("/subject",SubjectRouter)
app.use("/marks",MarksRouter)

app.use("/view",express.static("views"))

app.listen(3800,() => {
    console.log("server started");
})