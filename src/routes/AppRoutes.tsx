import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import { Login } from "../components/pages/login";
import { Register } from "../components/pages/register";
import { Admin } from "../components/pages/admin";
import { ContactUs } from "../components/pages/contactus";

/*<Route path="/register" element={< Adminpage/>} />
        <Route path="/admin" element={<App />} />
        <Route path="/contactus" element={<App />} />*/
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}
export { AppRoutes };
