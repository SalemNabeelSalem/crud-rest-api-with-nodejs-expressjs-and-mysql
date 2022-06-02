import express from "express";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./configs/swagger-docs.js";
import userRoutes from "./routes/user.routes.js";

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
 * Configure Swagger-UI:
 */
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/**
 * Configure Routes:
 */
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/", userRoutes);
