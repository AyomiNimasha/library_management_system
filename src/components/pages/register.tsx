import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <>
      <div className="flex bg-cyan-950 justify-center items-center h-screen">
        <div className="bg-white p-8 shadow-md rounded-md bg-opacity-30">
          <h1 className="text-2xl font-bold mb-4">Register</h1>
          <Link to="/">Register </Link>
          <form action="">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Name :
              </label>
              <input
                type="text"
                id="name"
                className="w-full py-2 px-3 border rounded-md text-gray-700"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email:
              </label>
              <input
                type="text"
                id="email"
                className="w-full py-2 px-3 border rounded-md text-gray-700"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">
                Password :
              </label>
              <input
                type="text"
                id="password"
                className="w-full py-2 px-3 border rounded-md text-gray-700"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 w-full text white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
