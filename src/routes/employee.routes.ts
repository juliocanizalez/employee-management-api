import { NextFunction, Router } from "express";
import {
  getEmployeeController,
  getEmployeesController,
  saveEmployeeController,
  updateEmployeeController,
} from "@controllers";
import { validateEmployee } from "@validators";
import { handleValidationErrors } from "@middlewares";

const router = Router();

router.get("/:id", getEmployeeController);
router.get("/", getEmployeesController);
router.post(
  "/",
  validateEmployee,
  handleValidationErrors as NextFunction,
  saveEmployeeController,
);
router.put("/:id", updateEmployeeController);

export default router;
