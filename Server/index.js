import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended:true}));//middleware


app.get("/", (req, res) => {
    res.send("hrll");
  });
app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});