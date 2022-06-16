import React, { useState, useEffect } from "react";
import { Switch, Select, Tag } from "antd";
import MenubarAdmin from "../../layouts/MenubarAdmin";
import { useSelector } from "react-redux";

// functions
import { listUser, changeStatus, changeRole } from "../../functions/user";

const ManageAdmin = () => {
  // เข้าถึง state ใน store redux
  const { user } = useSelector((state) => ({ ...state }));
  // console.log(user)
  const [data, setData] = useState([]);
  // console.log('data', data)

  useEffect(() => {
    //
    loadData(user.token);
  }, []);

  const loadData = (authtoken) => {
    // โหลดข้อมูลจากหลังบ้าน
    listUser(authtoken)
      .then((res) => {
        //
        // console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        //
        console.log(err.response.data);
      });
  };

  const handleOnchange = (e, id) => {
    const value = {
      id: id,
      enabled: e,
    };
    // console.log(value);
    changeStatus(user.token, value)
      .then((res) => {
        console.log(res);
        loadData(user.token);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const handleChangeRole = (e, id) => {
    let values = {
      id: id,
      role: e,
    };
    // console.log(values);
    changeRole(user.token, values)
    .then( res=>{
      console.log(res)
      loadData(user.token);
    }).catch(err=>{
      console.log(err.response)
    })

  };

  const roleData = ["admin", "user"];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <MenubarAdmin />
        </div>
        <div className="col">
          <h1>ManageAdmin Page</h1>

          <table class="table">
            <thead>
              <tr>
                <th scope="col">username</th>
                <th scope="col">role</th>
                <th scope="col">status</th>
                <th scope="col">created</th>
                <th scope="col">update</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr>
                  <th scope="row">{item.username}</th>
                  <td>
                    <Select
                      style={{ width: "100%" }}
                      defaultValue={item.role}
                      onChange={(e) => handleChangeRole(e, item._id)}
                    >
                      {roleData.map((item, index) => (
                        <Select.Option value={item} key={index}>
                          {item == "admin" ? (
                            <Tag color="green">{item}</Tag>
                          ) : (
                            <Tag color="red">{item}</Tag>
                          )}
                        </Select.Option>
                      ))}
                    </Select>
                  </td>
                  <td>
                    <Switch
                      checked={item.enabled}
                      onChange={(e) => handleOnchange(e, item._id)}
                    />
                  </td>
                  <td>{item.createdAt}</td>
                  <td>{item.updatedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageAdmin;
