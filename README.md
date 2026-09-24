# 📚 Book Management System

A simple and scalable **Book Management System** built using **Node.js, Express.js, and MongoDB**. This project provides REST APIs for managing books, users, and role-based access.

## 🚀 Features

* 🔐 User Authentication
* 📚 Book Management (CRUD)
* 📖 Add, Update, Delete, and View Books
* 🔍 List and Search Books
* 👤 User Panel
* 🛡️ Admin Panel
* 📊 Admin Dashboard
* 🔒 Role-Based Access Control
* 🌐 RESTful APIs

## 🛠️ Tech Stack

* **Node.js** – Backend runtime
* **Express.js** – Web framework
* **MongoDB** – Database
* **Mongoose** – MongoDB ODM

## 📁 Main Modules

* **Authentication** – User registration and login
* **Books** – Complete CRUD operations for books
* **Users** – Manage user accounts and roles
* **Admin** – Manage books and users
* **Dashboard** – Overview of system data and activities

---

## ⚙️ Setup & Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd book-management-system
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/book-management
JWT_SECRET=your_jwt_secret
```

Update the values according to your environment.

### 4. Start MongoDB

Make sure MongoDB is running locally or use a MongoDB Atlas connection.

For a local MongoDB installation:

```bash
mongod
```

### 5. Start the Development Server

```bash
npm run dev
```

The server will start at:

```text
http://localhost:3000
```

### 6. Start in Production

```bash
npm start
```

---

## 🔑 Usage

Once the server is running, you can use tools such as **Postman**, **Thunder Client**, or any frontend application to interact with the REST APIs.

### Authentication

Register a new user:

```http
POST /api/auth/register
```

Login:

```http
POST /api/auth/login
```

### Books

Get all books:

```http
GET /api/books
```

Get a single book:

```http
GET /api/books/:id
```

Create a book:

```http
POST /api/books
```

Update a book:

```http
PUT /api/books/:id
```

Delete a book:

```http
DELETE /api/books/:id
```

> 🔒 Create, update, and delete operations may require admin authentication depending on the application's access-control rules.

---

## 📌 Example Book Object

```json
{
  "title": "The Complete Node.js Guide",
  "author": "John Doe",
  "description": "A practical guide to learning Node.js.",
  "price": 499,
  "category": "Programming"
}
```

---

## 🧪 Testing the API

You can test the APIs using:

* Postman
* Thunder Client
* Insomnia
* Frontend applications

Make sure the server and MongoDB database are running before testing the APIs.

---

## 👩‍💻 Author

**Richa**

Thanks for checking out the project! ❤️
