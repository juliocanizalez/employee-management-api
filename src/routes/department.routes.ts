import { Router } from "express";
import {
  getDepartmentController,
  getDepartmentsController,
} from "@controllers";

const router = Router();

router.get("/:id", getDepartmentController);
router.get("/", getDepartmentsController);

export default router;
