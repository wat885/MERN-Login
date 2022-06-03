import React from "react";

import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

//Router
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home" icon={<MailOutlined />}>
        <Link to="/login">Login</Link>
        {/* to="/login"มาจากที่ตั้งใน Route */}
      </Menu.Item>
      <Menu.Item key="app" icon={<AppstoreOutlined />}>
        <Link to="/register">Register</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
