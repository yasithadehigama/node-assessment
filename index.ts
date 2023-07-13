import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 3000;

app.use(express.json());
app.use("/user", require("./Routes/userRoute"));

app.listen(port, function () {
  console.log("App listening on port " + port);
});
