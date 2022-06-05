import React from "react";

import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

//Router
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logout = () => {
    dispatch({
      type: 'LOGOUT',
      payload: null,
    })
    // redirect ไป home
    navigate('/')

  };

  return (
    <Menu mode="horizontal">
      <Menu.Item key="mail" icon={<MailOutlined />}>
        <Link to="/login">Login</Link>
        {/* to="/login"มาจากที่ตั้งใน Route */}
      </Menu.Item>

      <Menu.Item key="app" icon={<AppstoreOutlined />}>
        <Link to="/register">Register</Link>
      </Menu.Item>

      <Menu.Item key="out" icon={<AppstoreOutlined />} onClick={logout}>
        Logout
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
