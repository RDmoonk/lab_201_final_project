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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<IndexPage />} />
          <Route path="AdminLogin" element={<AdminLogin/>} />
          <Route path="AdminPanel" element={<AdminPanel/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
