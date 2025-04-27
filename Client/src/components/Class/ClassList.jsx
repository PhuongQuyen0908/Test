import React from "react";
import Link from "react-router-dom";

const ClassList = () => {
  return (
    <div>
      <div>
        <h3>Mange Class</h3>
      </div>
      <div>
        <input type="text" placeholder="Search By Dep Name" />
        <Link to="/admin-dashboard/add-class">Add New Class</Link>
      </div>
    </div>
  );
};
