# React Local Authentication System 🔐

A sleek, frontend-only user authentication application built with React.js. This project demonstrates how to handle user registration, login validation, and state management using the browser's `localStorage`—no backend required! 

It features an immersive video background (with a clean, light fallback design) and a dynamic user profile dashboard that renders upon a successful login.

---

## ✨ Features

- **📝 Complete Signup Flow:** Collects comprehensive user details (Name, Email, Password, Age, Phone, DOB, Country, Gender, Experience, and Address).
- **🔐 Secure Signin Validation:** Checks user credentials and handles edge cases (incorrect password, unregistered email).
- **💾 Data Persistence:** Uses browser `localStorage` to mimic a database.
- **👤 Dynamic Profile Dashboard:** Displays a full user profile after login.
- **🚪 Seamless Logout:** Clears session state smoothly.
- **🎬 Immersive UI (Adaptive):** Video background with clean fallback gradient.
- **⚡ Component Routing:** Easy navigation between Signup and Signin.

---

## 🛠️ Tech Stack

- **Frontend:** React.js (`useState`)
- **Routing:** React Router DOM
- **Styling:** Custom CSS
- **Storage:** Browser `localStorage`

---

## 🚀 Installation & Setup

Follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/jitesh-saini-dev/LoginAuth.git
```

### 2. Navigate to project folder
```bash
cd LoginAuth
```

### 3. Install dependencies
```bash
npm install react-router-dom
npm install
```

### 4. Add Video Background (Optional but Recommended)

**Note:** `bg-video.mp4` is excluded from the repo.

Steps:
- Download any background video
- Rename it to `bg-video.mp4`
- Place it inside the `public/` folder

**Fallback:**  
If skipped, this gradient will be used:
```css
linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)
```

---

### 5. Start development server
```bash
npm start
```

App will run at:  
👉 http://localhost:3000

---

## 📁 Project Structure (Key Files)

- `Signup.js` → Handles user registration & localStorage save  
- `Signin.js` → Handles login & profile rendering  
- `Header.js` → Navigation between pages  
- `public/` → Stores assets like `bg-video.mp4`  

---

## 💡 Key Learnings

- Managing complex forms using React `useState`
- Conditional rendering based on auth state
- Using `localStorage` for persistence
- Handling media assets + UI fallback design

---

## 👨‍💻 Developer

**Jitesh Saini**

- 🔗 GitHub: https://github.com/jitesh-saini-dev  
- 💼 LinkedIn: https://www.linkedin.com/in/jitesh-saini-dev/

Feel free to explore more MERN stack projects on my profile 🚀
