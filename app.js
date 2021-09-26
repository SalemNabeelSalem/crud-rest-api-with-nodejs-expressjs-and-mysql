import express from "express";
import bodyParser from "body-parser";

import userRoutes from "./routes/users.js";

/**
 * Configure Express Server:
 */
const app = express();
const port = process.env.PORT || 5000;

/**
 * Configure Body-Parser:
 */
//-> parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//-> parse application/json
app.use(bodyParser.json());

app.listen(port, () => console.log(`Server started on port ${port}`));

/**
 * Configure Routes:
 */
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/", userRoutes);
