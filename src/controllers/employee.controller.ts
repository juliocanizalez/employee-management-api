import { Request, Response } from "express";
import {
  getEmployee,
  getEmployees,
  saveEmployee,
  updateEmployee,
  deleteEmployee,
  activateEmployee,
  deactivateEmployee,
} from "@services";

export const getEmployeeController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const employee = await getEmployee(Number(id));
    if (employee === null) {
      res.status(404).json({ message: "Employee not found" });
      return;
    }
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", details: error });
  }
};

export const getEmployeesController = async (req: Request, res: Response) => {
  try {
    const employees = await getEmployees();

    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", details: error });
  }
};

export const saveEmployeeController = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, hireDate, phone, address, departmentId } =
      req.body;

    const departmentIdNumber = Number(departmentId);
    const employee = await saveEmployee({
      firstName,
      lastName,
      hireDate,
      phone,
      address,
      departmentId: departmentIdNumber,
    });

    res.status(201).json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", details: error });
  }
};

export const updateEmployeeController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, hireDate, phone, address, departmentId } =
      req.body;

    const idNumber = Number(id);

    const employee = await updateEmployee({
      id: idNumber,
      firstName,
      lastName,
      hireDate,
      phone,
      address,
      departmentId,
    });

    res.status(200).json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", details: error });
  }
};

export const deleteEmployeeController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const employee = await deleteEmployee(Number(id));

    res.status(200).json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", details: error });
  }
};

export const activateEmployeeController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;

    const employee = await activateEmployee(Number(id));

    res.status(200).json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", details: error });
  }
};

export const deactivateEmployeeController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;

    const employee = await deactivateEmployee(Number(id));

    res.status(200).json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", details: error });
  }
};
