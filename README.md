# React Local Authentication System 🔐

A sleek, frontend-only user authentication application built with React.js. This project demonstrates how to handle user registration, login validation, and state management using the browser's `localStorage`—no backend required! 

It features an immersive video background (with a clean, light fallback design) and a dynamic user profile dashboard that renders upon a successful login.

## ✨ Features

* **📝 Complete Signup Flow:** Collects comprehensive user details (Name, Email, Password, Age, Phone, DOB, Country, Gender, Experience, and Address).
* **🔐 Secure Signin Validation:** Checks user credentials against the stored data and handles edge cases (e.g., incorrect password, unregistered email).
* **💾 Data Persistence:** Uses browser `localStorage` to save and retrieve user data, mimicking a database.
* **👤 Dynamic Profile Dashboard:** Conditionally renders a detailed "User Profile Card" displaying all information once logged in.
* **🚪 Seamless Logout:** Clears current session state smoothly.
* **🎬 Immersive UI (Adaptive):** Features a continuous video background. If the video is unavailable, it elegantly falls back to a clean, premium light background so the text remains perfectly readable.
* **⚡ Component Routing:** Easy navigation between Signup and Signin pages.

## 🛠️ Tech Stack

* **Frontend:** React.js (Hooks: `useState`)
* **Routing:** React Router DOM
* **Styling:** Custom CSS (`Signup.css`, `Signin.css`, `Header.css`)
* **Storage:** Browser Web Storage API (`localStorage`)

## 🚀 Installation & Setup

Follow these steps to run the project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jitesh-saini-dev/LoginAuth.git

2. **Navigate to the project directory:**
  ```bash
  cd LoginAuth

3. **Install dependencies:**
  Make sure you have Node.js installed. Then run:
  ```bash
  npm install react-router-dom
  npm install

4. **Add the Video Background (⚠️ Important):**

  Note: To keep the repository lightweight, the background video (bg-video.mp4) has been excluded (.gitignore). To experience the full UI:
  Download any background video of your choice.
  Rename the file exactly to bg-video.mp4.
  Place it directly inside the public/ folder.
  Fallback: If you skip this step, don't worry! The app has a built-in premium CSS gradient fallback (linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)) ensuring     the black text and UI remain completely visible and intact.

5. **Start the development server:**

 ```bash
  npm start
  The app will automatically open in your browser at http://localhost:3000.

 ##📁 Project Structure (Key Files)

  Signup.js: Handles the registration form and saves data to local storage.
  Signin.js: Handles authentication and renders the user profile card.
  Header.js: Navigation bar to switch between Auth screens.
  public/: Location for assets like bg-video.mp4.

##💡 Key Learnings:

  This project was built to strengthen foundational React & Frontend concepts:
  Managing complex form states using React useState.
  Implementing conditional rendering based on authentication state.
  Understanding data flow and leveraging the Web Storage API (localStorage) for data persistence.
  Handling large media assets in Git and implementing CSS UI fallbacks.

Developed by Jitesh Saini 👨‍💻
Feel free to reach out or check out my other MERN stack projects on my profile!

 
