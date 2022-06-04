import React, { useState } from "react";
import { login } from "../../functions/auth";

const Login = () => {
  const [value, setValue] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    //เอาค่ามาจาก form โดย use state
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // ไม่ refresh
    console.log("Submit", value);

    // เรียก functions/auth.js insert เพิ่มลงmongo
    login(value)
      .then((res) => {
        console.log(res.data);
        alert(res.data);
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
