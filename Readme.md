#  Ryde Backend Developer Test

A RESTful backend API for managing user data using Node.js, Express, and MongoDB (Atlas), built for the Ryde backend developer assessment.

---

##  Features

- REST API for full CRUD operations on user data
- MongoDB Atlas for persistence
- Mongoose schema with `createdAt` timestamp
- Unit tests with mocking using Jest
- Integration tests using Supertest (no server start required)
- Modular, clean codebase with in-code comments
- Postman-ready endpoints

---

##  Tech Stack

- **Node.js + Express**
- **MongoDB Atlas + Mongoose**
- **Jest + Supertest** for testing
- Environment config via `.env`

---

##  How to Run This Project

###  1. Clone the Repository

```bash
git clone https://github.com/PraveenDung/ryde-backend.git
cd ryde-backend
```

---

###  2. Install Dependencies

```bash
npm install
```

---

###  3. Setup Environment Variables

Create a `.env` file at the root with the following:

```
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/ryde_test_db?retryWrites=true&w=majority
```

> Replace `<username>` and `<password>` with your MongoDB Atlas credentials.  
> Make sure your IP is whitelisted in the Atlas project.

---

###  4. Start the Server (Development)

```bash
npm run dev
```

Server will start on:  
 `http://localhost:3000`

---

##  API Endpoints (CRUD)

###  Create User
```
POST /api/users
```
```json
{
  "name": "John Doe",
  "dob": "1990-01-01",
  "address": "123 Main St",
  "description": "Test user"
}
```

###  Get All Users
```
GET /api/users
```

###  Get Single User
```
GET /api/users/:id
```

###  Update User
```
PUT /api/users/:id
```

###  Delete User
```
DELETE /api/users/:id
```

---

##  Running Tests

###  Run All Tests (Unit + Integration)
```bash
npm test
```

###  Run Specific Tests
```bash
npx jest tests/user.api.test.js         # Integration test (Supertest + MongoDB Atlas)
npx jest tests/user.controller.test.js  # Unit test with mock (no DB)
```

> No need to run the server for tests — they run against in-memory app instance.

---

##  Project Structure

```
ryde-backend/
├── src/
│   ├── models/           # Mongoose schema
│   ├── controllers/      # Route logic
│   └── routes/           # API routes
├── tests/                # Unit + integration tests
├── .env                  # MongoDB Atlas connection
├── server.js             # Entry point
├── README.md             # Project documentation
```

---

##  Developer Notes

- Tests include real DB integration and mocked unit controller testing.
- All controller and model files are documented inline.
- Built with clarity and modularity in mind for future extensibility.

---

##  Assignment Checklist

| Requirement                    | Status   |
|--------------------------------|----------|
| RESTful API with DB Persistence| ✅ Done  |
| Mongoose User Model            | ✅ Done  |
| Unit Tests (with mocks)        | ✅ Done  |
| Integration Tests              | ✅ Done  |
| API Documentation              | ✅ Done  |
| Good in-code comments          | ✅ Done  |
| Git commits and structure      | ✅ Done  |

---

###  Author

**Praveen Dung**  
[GitHub: @PraveenDung](https://github.com/PraveenDung)
