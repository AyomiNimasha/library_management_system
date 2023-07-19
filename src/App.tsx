import "./App.css";
import { Layout } from "./components/Layout";
import "bootstrap/dist/css/bootstrap.css"; //manually entered
import { Navbar } from "react-bootstrap";
import logo from "./images/logo.jpg";

function App() {
  return (
    <Layout>
      <div className="App">
        <Navbar bg="myred" variant="dark">
          <Navbar.Brand>
            <img src={logo} height={"30px"} width={"30px"} />
            Logo
          </Navbar.Brand>
        </Navbar>
        <div className="content">This is content</div>
      </div>
    </Layout>
  );
}

export default App;
