import React, { useState, useEffect } from "react";
import MenubarAdmin from "../../layouts/MenubarAdmin";
import { useSelector } from "react-redux";

// functions
import { listUser } from "../../functions/user";

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
                  <td>{item.role}</td>
                  <td>{item.enabled}</td>
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
