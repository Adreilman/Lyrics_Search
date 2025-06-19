import express from "express";
import bodyParser from "body-parser";
import routes from "./routes/handler.js/";

const app = express();
const PORT = 4000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use("/",routes);


app.listen(PORT,(req,res)=>{
    console.log(`Server is listening on ${PORT}`);
})
