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
    const artist = req.body["artistsearch"]
    const title = req.body["titlesearch"]
    
    const fetchLyrics = async (artist,title) => {
    const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`);
    if (!response.ok) {
        throw new Error('Lyrics not found');
    }
    const data = await response.json();
    console.log(data.lyrics);
    const lyrics = data.lyrics;
    console.log(lyrics);
    res.render("index.ejs",{
      lyrics: lyrics
    })
};
// Example usage
fetchLyrics(artist,title).catch(console.error);
})


app.listen(PORT,(req,res)=>{
    console.log(`Server is listening on ${PORT}`);
})
