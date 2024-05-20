import { Router } from "express";
import {
  createProject,
  deleteProject,
  getProject,
  getProjectsByUser,
  updateProject,
} from "../controllers/project.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();
router.use(verifyJWT);

router.route("/").get(getProjectsByUser);
router.route("/create").post(createProject);
router.route("/:id").get(getProject).delete(deleteProject).patch(updateProject);

export default router;
