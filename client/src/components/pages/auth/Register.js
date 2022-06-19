import React, { useState } from "react";
// function
import { register } from "../../functions/auth";
import { toast } from 'react-toastify';

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
      toast.error("Password not match");
      // alert("Password not match");
    } else {
      // เรียก functions/auth.js insert เพิ่มลงmongo
      register(value)
        .then((res) => {
          console.log(res.data);
          toast.success(res.data);

        })
        .catch((err) => {
          console.log(err.response.data);
          toast.error(err.response.data);
        });
    }
  };

  // console.log(value);

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1>Register page</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                className="form-control"
                type="text"
                name="username"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                className="form-control"
                type="text"
                name="password"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                className="form-control"
                type="text"
                name="password1"
                onChange={handleChange}
              />
            </div>
            <br />


            <button className="btn btn-success" disabled={value.password.length < 6}>submit</button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
