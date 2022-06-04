import React, { useState } from "react";
// function
import { register } from "../../functions/auth";

const Register = () => {
  const [value, setValue] = useState({
    username: "",
    password: "",
    password1: "",
  });

  const handleChange = (e) => {
    //เอาค่ามาจาก form โดย use state
    // console.log(e.target.name)
    // console.log(e.target.value)
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // ไม่ refresh
    console.log("Submit", value);
    if (value.password !== value.password1) {
      alert("Password not match");
    } else {
      // เรียก functions/auth.js insert เพิ่มลงmongo
      register(value)
        .then((res) => {
          console.log(res.data);
          alert(res.data);
        })
        .catch((err) => {
          console.log(err.response.data);
          alert(err.response.data);
        });
    }
  };

  // console.log(value);

  return (
    <div>
      <h1>Register page</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" name="username" onChange={handleChange} />

        <label>Password</label>
        <input type="text" name="password" onChange={handleChange} />
        <br />
        <label>Confirm Password</label>
        <input type="text" name="password1" onChange={handleChange} />
        <button disabled={value.password.length < 6}>submit</button>
      </form>
    </div>
  );
};

export default Register;
