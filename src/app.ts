require("express-async-errors");
import express from "express";
import routes from "./routes/route";
import bodyParser from "body-parser";
import { errorHandling } from "./utils/error";
class Application {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.app.use(bodyParser.json());
    this.setupRoutes();
    this.app.use(errorHandling);
  }
  private setupRoutes() {
    this.app.use(routes);
  }
}
export default new Application().app;
