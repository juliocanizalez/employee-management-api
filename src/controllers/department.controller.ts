import { Request, Response } from "express";
import { getDepartment, getDepartments, saveDepartment } from "@services";

export const getDepartmentController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const department = await getDepartment(Number(id));

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
