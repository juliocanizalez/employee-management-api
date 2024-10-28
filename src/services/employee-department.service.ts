import { prisma } from "@config";
import { EmployeeDepartment } from "types/employee-department.type";

export const getEmployeeDepartment = async (id: string) => {
  const employeeDepartment = await prisma.employeeDepartmentHistory.findMany({
    select: {
      department: {
        select: {
          name: true,
        },
      },
      createdAt: true,
    },
    where: {
      employeeId: id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return employeeDepartment;
};

export const saveEmployeeDepartment = async (data: EmployeeDepartment) => {
  const { employeeId, departmentId } = data;

  const employeeDepartment = await prisma.employeeDepartmentHistory.create({
    data: {
      employeeId,
      departmentId,
    },
  });

  return employeeDepartment;
};
