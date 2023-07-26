import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <>
      <div className="flex bg-cyan-950 justify-center items-center h-screen">
        <div className="bg-slate-200 bg-opacity-30 p-8 shadow-md rounded-md">
          <h1 className="text-black text-2xl font-bold mb-4">Login</h1>
          <Link to="/login"></Link>
          <form className="w-64 bg-transparent">
            <div className="mb-3">
              <label htmlFor="email" className="block text-gray-700 mb-4">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full border rounded-md text-gray-700 py-2 px-3"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="border rounded-md w-full text-gray-700 py-2 px-3"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 w-full text white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
