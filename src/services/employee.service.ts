import { prisma } from "@config";
import { Employee } from "types/employee.type";

export const getEmployee = async (id: string) => {
  const employee = await prisma.employee.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      hireDate: true,
      phone: true,
      address: true,
      departmentId: true,
      Department: {
        select: {
          name: true,
        },
      },
    },
  });

  return employee;
};

export const getEmployees = async () => {
  const employees = await prisma.employee.findMany({
    select: {
      id: true,
      firstName: true,
      lastName: true,
      hireDate: true,
      phone: false,
      address: false,
      Department: {
        select: {
          name: true,
        },
      },
    },
  });

  return employees;
};

export const saveEmployee = async (employee: Employee) => {
  const newEmployee = await prisma.employee.create({
    data: {
      ...employee,
    },
  });

  return newEmployee;
};

export const updateEmployee = async (employee: Employee) => {
  const updatedEmployee = await prisma.employee.update({
    where: {
      id: employee.id,
    },
    data: {
      ...employee,
    },
  });

  return updatedEmployee;
};

export const deleteEmployee = async (id: string) => {
  const deletedEmployee = await prisma.employee.delete({
    where: {
      id,
    },
  });

  return deletedEmployee;
};
