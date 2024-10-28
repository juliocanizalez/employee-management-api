import { prisma } from "@config";
import { Employee } from "types/employee.type";

export const getEmployee = async (id: number) => {
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
      imageUrl: true,
      departmentId: true,
      isActive: true,
      Department: {
        select: {
          name: true,
        },
      },
      EmployeeDepartmentHistory: {
        select: {
          department: {
            select: {
              name: true,
            },
          },
          createdAt: true,
        },
        orderBy: {
          createdAt: "desc",
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
      imageUrl: true,
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

  // Save into history table
  saveHistory(newEmployee);

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

  // Save into history table
  saveHistory(updatedEmployee);

  return updatedEmployee;
};

export const deleteEmployee = async (id: number) => {
  const result = await prisma.$transaction(async (tx) => {
    await tx.employeeDepartmentHistory.deleteMany({
      where: {
        employeeId: id,
      },
    });

    const deletedEmployee = await tx.employee.delete({
      where: {
        id,
      },
      include: {
        Department: true,
      },
    });

    return deletedEmployee;
  });

  return result;
};

export const activateEmployee = async (id: number) => {
  const activatedEmployee = await prisma.employee.update({
    where: {
      id,
    },
    data: {
      isActive: true,
    },
  });

  return activatedEmployee;
};

export const deactivateEmployee = async (id: number) => {
  const deactivatedEmployee = await prisma.employee.update({
    where: {
      id,
    },
    data: {
      isActive: false,
    },
  });

  return deactivatedEmployee;
};

const saveHistory = async (employee: Employee) => {
  await prisma.employeeDepartmentHistory.create({
    data: {
      employeeId: employee.id!,
      departmentId: employee.departmentId,
    },
  });
};
