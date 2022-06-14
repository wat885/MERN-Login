import React from "react";
import MenubarAdmin from "../../layouts/MenubarAdmin";

const ManageAdmin = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <MenubarAdmin />
        </div>
        <div className="col">
          <h1>ManageAdmin Page</h1>
        </div>
      </div>
    </div>
  );
};

export default ManageAdmin;
