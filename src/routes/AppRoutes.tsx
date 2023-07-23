import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Login from "../pages/login";
/*<Route path="/register" element={< Adminpage/>} />
        <Route path="/admin" element={<App />} />
        <Route path="/contactus" element={<App />} />*/
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export { AppRoutes };
