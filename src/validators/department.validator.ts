import { body } from "express-validator";

export const validateDepartment = [
  body("name")
    .notEmpty()
    .withMessage("Department name is required")
    .isLength({ max: 50 })
    .withMessage("Department name cannot exceed 50 characters"),
];
