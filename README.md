# Lokesh Goddumarri – ReactJS Developer Assessment

This is a multi-theme React application built as part of a frontend technical assessment. It demonstrates key ReactJS concepts including routing, authentication, context management, dynamic theming, and API integration using TypeScript and Vite.

---

## Features

- **Theme Switching**: Three unique UI themes with persisted state using localStorage.
- **Mock Authentication**: Login/logout functionality using mock user data.
- **Protected Routes**: Only logged-in users can access internal pages.
- **Fake Store Integration**: Product data fetched from fakestoreapi.com and displayed in card format.
- **Responsive Layout**: Optimized for both desktop and mobile devices.
- **Modular Code Structure**: Separation of concerns with clearly organized folders for components, context, pages, and types.

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Lokesh516/lokesh-goddumarri-reactjs-developer.git
cd lokesh-goddumarri-reactjs-developer
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Application

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔐 Demo Login Credentials (Same for Local & Live)

Use the following credentials to log in:

```
Email: test@example.com  
Password: demo123
```

These are defined in `src/data/mockUsers.json`. You must log in to access pages like **Home**, **About**, and **Contact**.

---

## Live Demo

[Click here to view the deployed app](https://lokesh-goddumarri-reactjs-developer.netlify.app/)

---

## Folder Structure

- **public/** – Static assets  
- **src/components/** – Shared UI components (Header, ProductCard, ProtectedRoute)  
- **src/context/** – React Context for authentication and theme switching  
- **src/pages/** – Route-based pages (Home, About, Contact, Login)  
- **src/data/** – Local JSON file for mock users  
- **src/types/** – Type definitions for product structure  
- **src/App.tsx** – App-level routing and layout  
- **src/main.tsx** – Application entry point

---

## Tech Stack

- React + TypeScript
- Vite
- React Router DOM
- Context API
- CSS Modules
- Fake Store API

---

## Notes

- This project is developed as part of a frontend developer assessment.
- Theme selection is saved in localStorage and applied globally using a ThemeContext.
- Routes like Home, About, and Contact are protected and require login.

---

## Author

**Lokesh Goddumarri**  
ReactJS Developer  
Email: lokeshyadav31290@gmail.com