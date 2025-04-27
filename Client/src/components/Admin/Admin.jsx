import Sidebar from "./SideBar";
const Admin = () => {
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <Sidebar />
      </div>
      <div className="admin-content">This is admin dashboard</div>
    </div>
  );
};

export default Admin;
