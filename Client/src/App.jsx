// import { useEffect, useState } from "react";
// import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import Header from "./components/Navbars/Header/Header";
// import LoginPage from "./Pages/Login/LoginPage2";
// import HomePage from "./components/Home/HomePage";

// import Taskbar from "./components/Navbars/Taskbar";

// function App() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     fetch("/http://localhost:9000/api")
//       .then((res) => res.json())
//       .then((data) => console.log(data))
//       .then((data) => console.log("Connected to BE:", data))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <>
//       <div className="app-container">
//         <div className="header-container">
//           <Header />
//         </div>

//         <div className="main-container">
//           <div className="sidebar-container"></div>

//           <div className="content-container">
//             <Outlet />
//           </div>
//         </div>
//       </div>

//       {/* <div className="modal-container">
//         <div className="page">
//           <LoginPage />
//         </div>
//       </div> */}
//     </>
//   );
// }

import { ColorModeContext, useMode } from "./theme";
import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
// import Invoices from "./scenes/invoices";
// import Contacts from "./scenes/contacts";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import LoginPage from "./Pages/Login/LoginPage1";
import ModalAddStudent from "./components/Modal/ModalAddStudent";
import AdminPage from "./Pages/Admin/AdminPage";
import Admin from "./components/Admin/Admin";
// import { ColorModeContext, useMode } from "./theme";
//import Calendar from "./scenes/calendar/calendar";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />

            <Routes>
              <Route index element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="login" element={<LoginPage />} />
              {/* <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>

    // <BrowserRouter>
    //   <Routes>
    //     <Routes>
    //       <Route index element={<Dashboard />} />
    //       <Route path="/login" element={<LoginPage />} />
    //       <Route path="/team" element={<Team />} />
    //     </Routes>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
