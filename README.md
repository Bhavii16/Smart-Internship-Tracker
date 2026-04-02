# Smart Internship Tracker

## Project Overview
Smart Internship Tracker is a full-stack web application designed to streamline the process of managing internships for students and administrators. It provides features for student registration, internship application, admin approval, and dashboard views for both students and admins.

---

## Features
- **User Authentication:** Secure login and registration for students and admins.
- **Student Dashboard:** Students can view available internships, apply, and track application status.
- **Admin Panel:** Admins can manage internships, view applications, approve/reject applications, and manage users.
- **Internship Management:** CRUD operations for internships (Create, Read, Update, Delete).
- **Application Tracking:** Students can see the status of their applications (pending, approved, rejected).
- **Role-Based Access:** Different views and permissions for students and admins.

---

## Folder Structure
- `server.js`: Entry point for the backend server (Node.js + Express).
- `config/db.js`: Database connection setup (MongoDB).
- `controllers/`: Contains logic for handling requests (admin, application, auth, internship).
- `middleware/authMiddleware.js`: Middleware for authentication and authorization.
- `models/`: Mongoose models for User, Internship, and Application.
- `public/`: Frontend HTML files for login, registration, dashboards, and admin panel.
- `routes/`: Express route definitions for different modules.
- `package.json`: Project dependencies and scripts.

---

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose ODM)
- **Authentication:** JWT (JSON Web Tokens)

---

## How It Works
1. **User Registration & Login:**
   - Students and admins register/login via the frontend forms.
   - JWT tokens are used for session management.
2. **Student Actions:**
   - View available internships.
   - Apply for internships.
   - Track application status on their dashboard.
3. **Admin Actions:**
   - Add, edit, or delete internship postings.
   - View all student applications.
   - Approve or reject applications.
   - Manage user accounts.

---

## Key Files Explained
- **server.js:** Sets up Express server, connects to MongoDB, and mounts all routes.
- **models/User.js:** Defines the user schema (student/admin roles).
- **models/Internship.js:** Defines the internship schema.
- **models/Application.js:** Defines the application schema linking students to internships.
- **controllers/**: Contains business logic for each module (auth, admin, internship, application).
- **routes/**: Maps HTTP endpoints to controller functions.
- **public/**: Contains all frontend HTML files for user interaction.

---

## Typical Flow
1. **Student registers and logs in.**
2. **Student browses internships and applies.**
3. **Admin reviews applications and updates status.**
4. **Student checks application status on dashboard.**

---

## Viva Preparation: Key Points to Explain
- **Architecture:**
  - MVC pattern (Models, Views, Controllers)
  - RESTful API design
- **Authentication:**
  - JWT-based authentication and role-based access control
- **Database:**
  - MongoDB collections for users, internships, and applications
- **Frontend-Backend Communication:**
  - AJAX/fetch API for sending requests to backend
- **Error Handling:**
  - Middleware for catching and responding to errors
- **Security:**
  - Password hashing, JWT, and protected routes

---

## How to Run the Project
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Set up MongoDB:**
   - Make sure MongoDB is running locally or provide a connection string in `config/db.js`.
3. **Start the server:**
   ```bash
   node server.js
   ```
4. **Open the frontend:**
   - Open the HTML files in the `public/` folder in your browser.

---



