import { Request, Response } from "express";
import { getEmployeeDepartment } from "services";

export const getEmployeeDepartmentController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const employeeDepartment = await getEmployeeDepartment(id);
  res.status(200).json(employeeDepartment);
};
