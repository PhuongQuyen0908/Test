import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import App from "./App.jsx";
import UserPage from "./Pages/User/UserPage.jsx";
import AdminPage from "./Pages/Admin/AdminPage.jsx";
import HomePage from "./components/Home/HomePage.jsx";
// import Login1 from "./Pages/Login/LoginPage2.jsx";
import LoginPage from "./Pages/Login/LoginPage1.jsx";
import Admin from "./components/Admin/Admin.jsx";
import ModalAddClass from "./components/Class/ModalAddClass.jsx";
createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {/* <Route index element={<HomePage />} />
        <Route path="user" element={<UserPage />} />
        <Route path="admin" element={<AdminPage />} /> */}
      </Route>
      <Route path="admin-dashboard" element={<Admin />} />
      {/* <Route path="addStudent" element={<ModalAddStudent />} /> */}
      <Route path="addClass" element={<ModalAddClass />} />
      <Route path="login" element={<LoginPage />} />
    </Routes>
  </BrowserRouter>
  // </StrictMode>
);
