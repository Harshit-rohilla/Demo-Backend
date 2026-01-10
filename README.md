# Demo Backend – Scalable Node.js API

A **TypeScript-based Node.js backend** designed for scalability, maintainability, and real-world production use.  
This backend powers the demo tech platform by handling authentication, API routing, middleware, and future extensibility.

---

## 🧠 Project Overview

Key goals of this backend:
- Clear project structure
- Easy feature expansion
- Production-ready configuration
- Clean separation between logic layers

The backend is deployable on **Render** and integrates seamlessly with frontend applications hosted on **Netlify**

---

## 🛠 Tech Stack

### Core
- **Node.js**
- **Express.js**
- **TypeScript**

### Database
- **MongoDB**
- **Mongoose**

### Security & Auth
- **JWT (JSON Web Tokens)**
- **bcrypt**

### Utilities
- **dotenv**
- **cors**
- **cookie-parser**

### Development
- **ts-node-dev**
- **TypeScript compiler (tsc)**

---

## 📦 Key Libraries & Why They Are Used

### express
Used as the core HTTP server framework.

- Routing
- Middleware handling
- Request / response lifecycle

---

### mongoose
Used for database interaction with MongoDB.

- Schema-based modeling
- Validation
- Query abstraction

---

### jsonwebtoken (JWT)
Used for authentication and authorization.

- Stateless auth
- Secure token-based access
- Scales well for APIs

---

### bcrypt
Used for password hashing.

- One-way encryption
- Prevents storing plain-text passwords

---

### cors
Handles Cross-Origin Resource Sharing.

- Controls which frontend can access the API
- Supports credentials (cookies, auth headers)

---

### dotenv
Loads environment variables securely.

- Keeps secrets out of source code
- Supports multiple environments (dev / prod)

---
