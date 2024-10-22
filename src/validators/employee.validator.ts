import { body } from "express-validator";

export const validateEmployee = [
  body("firstName")
    .notEmpty()
    .withMessage("First name is required")
    .isLength({ max: 50 })
    .withMessage("First name cannot exceed 50 characters"),
  body("lastName")
    .notEmpty()
    .withMessage("Last name is required")
    .isLength({ max: 50 })
    .withMessage("Last name cannot exceed 50 characters"),
  body("hireDate")
    .notEmpty()
    .withMessage("Hire date is required")
    .isISO8601()
    .withMessage("Hire date must be a valid date"),
  body("phone")
    .notEmpty()
    .withMessage("Phone number is required")
    .isLength({ max: 20 })
    .withMessage("Phone number cannot exceed 20 characters"),
  body("address")
    .notEmpty()
    .withMessage("Address is required")
    .isLength({ max: 50 })
    .withMessage("Address cannot exceed 50 characters"),
  body("departmentId")
    .notEmpty()
    .withMessage("Department ID is required")
    .isLength({ max: 36 })
    .withMessage("Department ID cannot exceed 36 characters"),
];
