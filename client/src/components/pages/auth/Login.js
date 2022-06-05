import React, { useState } from "react";
// fuction
import { login } from "../../functions/auth";
// redux
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    username: "",
    password: "",
  });

  // ตรวจ role แล้ว redirect ไปตาม role
  const roleBaseRedirect = (role) => {
    if (role === "admin") {
      navigate("/admin/index");
    } else {
      navigate("/user/index");
    }
  };

  const handleChange = (e) => {
    //เอาค่ามาจาก form โดย use state เก็บไว้ใน object value รอส่ง
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // ไม่ refresh
    console.log("Submit", value);

    // ไปตรวจสอบที่หลังบ้าน
    login(value)
      .then((res) => {
        console.log(res.data);
        alert(res.data);

        // ส่งค่าไปที่ store
        dispatch({
          type: "LOGIN",
          payload: {
            token: res.data.token,
            username: res.data.payload.user.username,
            role: res.data.payload.user.role,
          },
        });
        console.log(res.data.payload.user.role)  //role

        // เก็บ token ที่ localStorage
        localStorage.setItem("token", res.data.token);

        roleBaseRedirect(res.data.payload.user.role);
      })
      .catch((err) => {
        console.log(err.response.data);
        alert(err.response.data);
      });
  };

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" name="username" onChange={handleChange} />

        <label>Password</label>
        <input type="text" name="password" onChange={handleChange} />

        <button>submit</button>
      </form>
    </div>
  );
};

export default Login;
