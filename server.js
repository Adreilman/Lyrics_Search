import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index.ejs")
})

app.post("/search",(req,res)=>{
    console.log("Searched");
    const data = req.body["searchbar"];
    res.send(data)
})

app.get("/search",(req,res)=>{
    console.log("Searched")
    const data = req.body.searchbar;
    res.send(data)
})


app.listen(PORT,(req,res)=>{
    console.log(`Server is listening on ${PORT}`);
})
