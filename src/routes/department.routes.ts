import { NextFunction, Router } from "express";
import {
  getDepartmentController,
  getDepartmentsController,
  saveDepartmentController,
} from "@controllers";
import { validateDepartment } from "@validators";
import { handleValidationErrors } from "@middlewares";

const router = Router();

router.get("/:id", getDepartmentController);
router.get("/", getDepartmentsController);
router.post(
  "/",
  validateDepartment,
  handleValidationErrors as NextFunction,
  saveDepartmentController,
);

export default router;
