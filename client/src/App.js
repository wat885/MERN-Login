import React, { useState, useEffect } from "react";

// Page
import Register from "./components/pages/auth/Register";
import Login from "./components/pages/auth/Login";
import Home from "./components/pages/Home";

// Layout
import Navbar from "./components/layouts/Navbar";

import { Routes, Route } from "react-router-dom";
// pages admin
import HomeAdmin from "./components/pages/admin/Home";
import ManageAdmin from "./components/pages/admin/ManageAdmin";

// pages user
import HomeUser from "./components/pages/user/Home";

//fuction
import { currentUser } from "./components/functions/auth";

// redux
import { useDispatch } from "react-redux";

// Routes
import UserRoute from "./components/routes/UserRoute";
import AdminRoute from "./components/routes/AdminRoute";

function App() {
  const dispatch = useDispatch();

  const idtoken = localStorage.token;
  if (idtoken) {
    // ส่ง tokenไปหลังบ้าน
    currentUser(idtoken)
      .then((res) => {
        //
        console.log(res.data);

        dispatch({
          type: "LOGIN",
          payload: {
            token: idtoken,
            username: res.data.username,
            role: res.data.role,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/admin/index"
          element={
            <AdminRoute>
              <HomeAdmin />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/manage-admin"
          element={
            // ใส่ UserRoute ครอบหน้าที่ต้องการจำกัด ว่าเป็น admin เท่านั้น
            <AdminRoute>
              <ManageAdmin />
            </AdminRoute>
          }
        />

        <Route
          path="/user/index"
          element={
            // ใส่ UserRoute ครอบหน้าที่ต้องการจำกัด ว่าเป็น user เท่านั้น
            <UserRoute>
              <HomeUser />
            </UserRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
