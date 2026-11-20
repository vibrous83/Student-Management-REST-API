import express from "express"
import router from "./router.js";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json())
app.use(router)

app.get("/", (req, res) => {
    res.json({message: "tes"})
})

const port = 3000;

app.listen(port, () => {
    console.log(`running on  ${port}`)
})