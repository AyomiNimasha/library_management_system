import "./App.css";
import { Layout } from "./components/Layout";
import "bootstrap/dist/css/bootstrap.css"; //manually entered
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import logo from "./images/logo.jpg";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

function App() {
  return (
    <Layout>
      <div className="App">
        <Navbar
          bg="myred"
          variant="dark"
          sticky="top"
          expand="lg"
          collapseOnSelect
        >
          <Navbar.Brand>
            <img src={logo} height={"30px"} width={"30px"} />
            Logo
          </Navbar.Brand>
          <NavbarToggle />
          <NavbarCollapse className="right-aligned">
            <Nav>
              <NavDropdown title="Login">
                <NavDropdown.Item href="#Login/Staff">Staff</NavDropdown.Item>
                <NavDropdown.Item href="#Login/Student">
                  Student
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#Login/Other">Other</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#Register">Register</Nav.Link>
              <Nav.Link href="#Login">Login</Nav.Link>
              <Nav.Link href="#Admin">Admin</Nav.Link>
              <Nav.Link href="#contact-us">Contact Us</Nav.Link>
            </Nav>
          </NavbarCollapse>
        </Navbar>
        <div className="content">This is content</div>
      </div>
    </Layout>
  );
}

export default App;
