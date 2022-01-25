import { Router } from "express";
import { resolve } from "path";
import jsyaml from "js-yaml";
import fs from "fs";
import * as userController from "../controllers/userController";
import * as mapController from "../controllers/mapController";

const router = Router();
// const docPath = resolve(`src`, "openapi.yaml");
// const openApi: any = jsyaml.load(fs.readFileSync(docPath, "utf-8"));

//User
router.post(
  "/api/v1/user",
  userController.create
);

//Map
router.post(
  "/api/v1/map",
  mapController.create
);
router.get("/api/v1/maps", mapController.findAllByUserId);

export default router;