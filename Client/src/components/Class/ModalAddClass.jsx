import React from "react";

const ModalAddClass = () => {
  return (
    <div>
      <div>
        <h3>Manage Class </h3>
      </div>
      <div>
        <input type="text" placeholder="Search By Name Class" />
        <Link to="/admin-dashboard/add-new-class"></Link>
      </div>
    </div>
  );
};

export default ModalAddClass;
