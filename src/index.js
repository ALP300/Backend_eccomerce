import dotenv from "dotenv";
import Express from "express";
import { conecctionDB } from "./config/database.js";

const app = Express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

conecctionDB();