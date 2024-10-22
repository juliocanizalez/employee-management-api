import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { getDepartment, getDepartments, saveDepartment } from "@services";

export const getDepartmentController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const department = await getDepartment(id);

    res.status(200).json(department);
  } catch (error) {
    res.status(404).json({ message: "Department not found", details: error });
  }
};

export const getDepartmentsController = async (req: Request, res: Response) => {
  try {
    const departments = await getDepartments();

    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", details: error });
  }
};

export const saveDepartmentController = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ message: "Bad request", details: errors.array() });
  }

  try {
    const { name } = req.body;

    const department = await saveDepartment({ name });

    res.status(201).json(department);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", details: error });
  }
};
