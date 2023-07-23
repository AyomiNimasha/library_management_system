import { Link } from "react-router-dom";

export const login = () => {
  return (
    <>
      <div>
        <h1>login</h1>
        <Link to="/register">Register </Link>
      </div>
    </>
  );
};
