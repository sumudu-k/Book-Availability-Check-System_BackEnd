# 📚 Book Availability Check System

This system is specifically designed for small educational centers that operate a mini library. It enables registered students to conveniently check the availability of books online, eliminating the need to visit the library in person. By streamlining access to library resources, the platform enhances the student experience and supports effective learning within the educational center.

---

## 🌐 Live Website

<a href="https://book.sumudu.site">
  <img src="https://img.shields.io/badge/Visit-Live%20Website-%230097e6?style=for-the-badge&logo=globe&logoColor=white" style="height:40px;" />
</a>
<br>

## 🔗 Website: https://book.sumudu.site

---

## 🚀 Features

### 👩‍🎓 User Experience

- **Search Books**
  - Find books by title
- **Book Details**
  - View book descriptions, author, and availability status.
- **Login & Registration**
  - Secure sign up and sign in

### 🧑‍💼 Admin Dashboard

- **Inventory Management**
  - Add, edit, or remove books from the system.
- **Secure Admin Authentication**
  - JWT-based login for admins.

### 🔒 Security & User Management

- **Session Management:** Authenticated access for users and admins.
- **Role-Based Access:** Separate dashboards and permissions.
- **Password Hashing:** Secure password storage.
- **JWT Authentication:** Used for secure API access.

---

## 🖥️ Deployed Server Specifications

Book Availability Check System is deployed on:

- ✅ **Server Provider:** DigitalOcean
- 🌐 **Data Center Location:** BLR1 (Bangalore, India)
- 🧠 **Memory (RAM):** 2 GB
- 💾 **Disk Space:** 50 GB SSD
- 🖥️ **Operating System:** Ubuntu 24.04 LTS (x64)

---

## 🏁 Getting Started

Book Availability Check System has separate repositories for frontend and backend.

### 1. Clone Repositories

```bash
# Frontend
git clone https://github.com/sumudu-k/Book-Availability-Check-System_FrontEnd.git
cd Book-Availability-Check-System_FrontEnd
npm install

# Backend
git clone https://github.com/sumudu-k/Book-Availability-Check-System_BackEnd.git
cd Book-Availability-Check-System_BackEnd
npm install
```

### 2. Configure Environment Variables

#### Backend: `.env` file

Copy `.env.example` to `.env` and update with your credentials:

```env
MONGO_DB_URI="your-mongodb-uri"
SECRET="your-jwt-secret"
```

#### Frontend: `.env` file

Copy `.env.example` to `.env` and update with your credentials:

```env
VITE_BACKEND_URL="http://localhost:5000"
```

### 3. Import Database

- Ensure you have a MongoDB cluster (Atlas or local).
- The backend will create necessary collections on first run.

### 4. Start the Application

```bash
# Backend
cd Book-Availability-Check-System_BackEnd
npm start

# Frontend (in separate terminal)
cd Book-Availability-Check-System_FrontEnd
npm run dev
```

### 5. Access the Application

- **Frontend:** http://localhost:5173
- **Backend:** http://localhost:5000

---

## 💻 Tech Stack

- **Frontend**

  - React.js
  - Tailwind CSS (Modern responsive design)
  - Vite (Development/build tool)

- **Backend**
  - Node.js
  - Express.js (API server)
  - MongoDB (Database)
  - JWT (Authentication & authorization)

---

## 🤝 Contributing

We welcome improvements to Book Availability Check System! To contribute:

1. Fork the frontend and backend repositories.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a clear description of your changes.

---

## 📄 License

This project is licensed under the MIT License.

---

## 🟡 Screenshots

<p float="left">
  <img src="https://raw.githubusercontent.com/sumudu-k/Book-Availability-Check-System_FrontEnd/main/Screenshots/cover1.png" width="48%" />
  <img src="https://raw.githubusercontent.com/sumudu-k/Book-Availability-Check-System_FrontEnd/main/Screenshots/cover2.png" width="48%" />
</p>
<p float="left">
  <img src="https://raw.githubusercontent.com/sumudu-k/Book-Availability-Check-System_FrontEnd/main/Screenshots/cover3.png" width="48%" />
  <img src="https://raw.githubusercontent.com/sumudu-k/Book-Availability-Check-System_FrontEnd/main/Screenshots/cover4.png" width="48%" />
</p>

---

## 📁 Repository Links

- **Frontend:** [https://github.com/sumudu-k/Book-Availability-Check-System_FrontEnd](https://github.com/sumudu-k/Book-Availability-Check-System_FrontEnd)
- **Backend:** [https://github.com/sumudu-k/Book-Availability-Check-System_BackEnd](https://github.com/sumudu-k/Book-Availability-Check-System_BackEnd)

---

**Book Availability Check System — Making it easy to find your next read!**
