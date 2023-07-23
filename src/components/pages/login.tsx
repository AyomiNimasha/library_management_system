import { Link } from "react-router-dom";
import { Form } from "../Form";

export const Login = () => {
  return (
    <>
      <div>
        <h1>login Page</h1>
        <Link to="/login"></Link>
        <Form />
      </div>
    </>
  );
};
