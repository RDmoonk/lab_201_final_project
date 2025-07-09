import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { MainLayout } from "@/layouts/main-layout";

import IndexPage from "@/pages/index";

import "@/index.css";
import AdminLogin from "./pages/admin/login";
import AdminPanel from "./pages/admin/adminPanel";
import { ProtectedLayout } from "./layouts/protected-layout";
import { AuthProvider } from "./contexte/authContext";
import AdminHome from "./pages/admin/adminHomePage";
import "./assets/fonts/fonts.css";
import Shop from "./pages/shop";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<IndexPage />} />
          <Route path="shop" element={<Shop/>}/>
          <Route path="AdminLogin" element={<AdminLogin/>} />
          {/*admin panel à protéger  */}
             <Route element={<ProtectedLayout/>}>
         <Route path="AdminPanel" element={<AdminPanel/>}/>
        </Route>
        <Route element={<ProtectedLayout/>}>
        <Route path="/AdminPanel/:id" element={<AdminPanel />} />
        </Route>
        <Route element={<ProtectedLayout/>} >
        <Route path="adminHome" element={<AdminHome/>}/>
        </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
);
