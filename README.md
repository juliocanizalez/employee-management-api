# Employee Maintenance API

This is a simple API to maintain employee information.

## Database diagram

![Database diagram](https://res.cloudinary.com/dqaav1s3t/image/upload/v1730087615/samples/gkgqc9socuohahrij8zz.png)

## API Documentation

The API documentation is available at [https://www.postman.com/juliocanizalez/employee-management/overview](https://www.postman.com/juliocanizalez/employee-management/overview)

## How to setup this project in your machine

### Prerequisites

- Node.js LTS/Iron
- NPM
- Docker (optional)

### Installing

```bash
npm install
```

### Setup environment

- (Optional) Update the dockerfile with the correct values and run the following command to build the image that will contain the database.

```bash
docker build -t employee-maintenance-db .
```
#### Or have the connection string to your PostgreSQL database.

- Use the .env.sample file to create a .env file with the correct values.

```bash
cp .env.sample .env
```

- Run the prisma database migration.

```bash
npx prisma migrate dev --name init
```

### Running

```bash
npm run dev
```
