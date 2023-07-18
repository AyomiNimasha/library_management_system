import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}
export { AppRoutes };
