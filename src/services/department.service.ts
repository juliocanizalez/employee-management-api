import { prisma } from "@config";
import { Department } from "types/department.type";

export const getDepartment = async (id: string) => {
  const department = await prisma.department.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      _count: {
        select: {
          Employee: true,
        },
      },
    },
  });

  return department;
};

export const getDepartments = async () => {
  const departments = await prisma.department.findMany({
    select: {
      id: true,
      name: true,
      _count: {
        select: {
          Employee: true,
        },
      },
    },
  });

  return departments;
};

export const saveDepartment = async (department: Department) => {
  const newDepartment = await prisma.department.create({
    data: {
      name: department.name,
    },
  });

  return newDepartment;
};
