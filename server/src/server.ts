
import cors from "cors";
import express from "express";
import { connectToDatabase } from "./database";
import { employeeRouter } from "./employee.routes";


// Load environment variables from the .env file, where the ATLAS_URI is configured


//const uri : string = 'mongodb://127.0.0.1:27017/tutorial_db'
const uri : string = 'mongodb://127.0.0.1:27017/employee_db'

connectToDatabase(uri)
    .then(() => {
        const app = express();
        app.use(cors());
        app.use("/employees", employeeRouter);

        // start the Express server
        app.listen(5200, () => {
            console.log(`Server running at http://localhost:5200...`);
        });

    })
    .catch(error => console.error(error));
