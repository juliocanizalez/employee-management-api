import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const departments = [
    "IT",
    "HR",
    "Finance",
    "Marketing",
    "Sales",
    "Engineering",
  ];
  console.log("Seeding database with departments...");
  for (const department of departments) {
    await prisma.department.create({
      data: {
        name: department,
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
