import { Router } from "express";
import { getEmployeeDepartmentController } from "@controllers";

const router = Router();

router.get("/:id", getEmployeeDepartmentController);

export default router;
