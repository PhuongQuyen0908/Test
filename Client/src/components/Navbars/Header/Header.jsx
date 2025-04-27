import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "../../../styles/Navbars/Header.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/register");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Quản lý học sinh</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="nav-link">
              Trang chủ
            </Nav.Link>
            <Nav.Link href="/user" className="nav-link">
              User
            </Nav.Link>
            <Nav.Link href="/admin" className="nav-link">
              Admin
            </Nav.Link>
          </Nav>
          <Nav>
            <button className="btn-login" onClick={handleLogin}>
              Đăng nhập
            </button>
            <button className="btn-signup" onClick={handleSignup}>
              Đăng kí
            </button>
            {/* <NavDropdown title="Setting" id="basic-nav-dropdown">
              <NavDropdown.Item href="/login">Log in</NavDropdown.Item>
              <NavDropdown.Item href="/logout">Log out</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Profile</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
