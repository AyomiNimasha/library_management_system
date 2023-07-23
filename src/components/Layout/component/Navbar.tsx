import { Link } from "react-router-dom";

export const Navbar = () => {
  const navLinks = [
    { link: "/register", title: "Register", id: 0 },
    { link: "/login", title: "Login", id: 1 },
    { link: "/admin", title: "Admin", id: 2 },
    { link: "/contactus", title: "Contact Us", id: 3 },
  ];
  return (
    <div className="flex h-12 bg-green-600 text-white  gap-10 justify-end">
      {navLinks.map((item) => (
        <Link to={item.link} key={item.id} className="">
          {item.title}
        </Link>
      ))}
    </div>
  );
};
