import {Router} from 'express';
import {
  createProject,
  deleteProject,
  getProject,
  changeProjectStatus,
  getProjectsByUser,
} from "../controllers/project.controller.js";
import {verifyJWT} from "../middleware/auth.js";

const router = Router();
router.use(verifyJWT)

router.route("/").get(getProjectsByUser);
router.route("/create").post(createProject);
router.route("/:id").get(getProject).delete(deleteProject).patch(changeProjectStatus);

export default router;