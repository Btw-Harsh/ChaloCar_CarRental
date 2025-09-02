# 🚗 ChaloCar – Car Rental System  

ChaloCar is a **MERN stack car rental application (Work in Progress)** designed to make vehicle booking simple, efficient, and user-friendly.  
It allows customers to browse available cars, book rentals, and manage reservations, while admins can manage vehicles, users, and bookings through an easy interface.  

---

## 🚧 Project Status  

⚠️ **Note:** This project is currently under active development.  
- Some features may not be fully functional yet.  
- UI and backend APIs are being built step by step.  
- Contributions and suggestions are welcome! 🚀  

---

## ✨ Features (Planned & In Progress)  

### 🔑 User Features  
- [x] User authentication (Sign up / Login with JWT)  
- [ ] Browse available cars with details (price, model, features)  
- [ ] Search & filter cars by category, price, or availability  
- [ ] Book cars and manage reservations  
- [ ] View booking history  

### 🛠️ Admin Features  
- [ ] Add, update, and delete cars from the system  
- [ ] Manage bookings and customer details  
- [ ] Monitor availability and rental status  

---

## 🏗️ Tech Stack  

- **Frontend:** React.js, Tailwind CSS (or plain CSS if used)  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose ODM)  
- **Authentication:** JWT (JSON Web Tokens)  
- **Other Tools:** Git & GitHub  

---

## ⚙️ Installation & Setup  

### Prerequisites  
- Node.js & npm  
- MongoDB (local or Atlas)  
- Git  

### Steps  

1. Clone the repository  
   ```bash
   git clone https://github.com/Btw-Harsh/ChaloCar_CarRental.git
   cd ChaloCar_CarRental
   ```

2. Install dependencies for both backend and frontend  
   ```bash
   # Backend
   cd server
   npm install

   # Frontend
   cd ../client
   npm install
   ```

3. Create a `.env` file inside `server` with the following keys:  
   ```
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_secret_key
   PORT=5000
   ```

4. Run the backend  
   ```bash
   cd server
   npm run dev
   ```

5. Run the frontend  
   ```bash
   cd client
   npm start
   ```

6. Open the app in your browser:  
   ```
   http://localhost:3000
   ```

---

## 📸 Screenshots  

*(Coming soon – UI is under development)*  

---

## 📌 Roadmap  

- ✅ Project setup (MERN stack)  
- ✅ User authentication (JWT + MongoDB)  
- ⬜ Car listing page  
- ⬜ Booking system  
- ⬜ Admin panel  
- ⬜ Payment gateway integration  
- ⬜ Deployment (Vercel for frontend, Render/Heroku for backend, MongoDB Atlas)  

---

## 🤝 Contributing  

Contributions are welcome!  
1. Fork the repo  
2. Create a new branch (`feature-xyz`)  
3. Commit your changes  
4. Push to your branch  
5. Open a Pull Request 🚀  

---

## 👨‍💻 Author  

**Harsh Sharma**  
- GitHub: [Btw-Harsh](https://github.com/Btw-Harsh)  
- LinkedIn: *(add your link here)*  

---

⭐ Don’t forget to star this repo if you like the project!
