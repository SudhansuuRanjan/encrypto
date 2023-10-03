const PORT = process.env.PORT || 4000;
import dotenv from "dotenv";
dotenv.config();
import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT} 🚀.`);
})