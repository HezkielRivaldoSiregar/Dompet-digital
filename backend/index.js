import express from "express";
import cors from "cors";
import TransaksiRoute from "./routes/TransaksiRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(TransaksiRoute);

app.listen(5000, ()=> console.log('Server up and running...'));