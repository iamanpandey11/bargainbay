import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";
import { signoutSuccess } from "../redux/user/userSlice";
import { useEffect, useState } from "react";
import logo from "../images/logo.jpeg";

export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <Navbar className="bg-gray-100 text-white">
      <div className="flex items-center justify-between px-4 py-2">
        <Link to="/">
          <img src={logo} alt="image" className="h-16" />
        </Link>

        <form onSubmit={handleSubmit} className="flex items-center">
          <TextInput
            type="text"
            placeholder="Search..."
            rightIcon={AiOutlineSearch}
            className="hidden lg:inline bg-gray-700 text-white px-2 py-1 rounded-lg focus:outline-none focus:bg-gray-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button type="submit" className="ml-2 lg:hidden" color="gray" pill>
            <AiOutlineSearch />
          </Button>
        </form>

        <div className="flex items-center gap-4">
          <Button
            className="w-10 h-10 hidden sm:inline"
            color="gray"
            pill
            onClick={() => dispatch(toggleTheme())}
          >
            {theme === "light" ? <FaSun /> : <FaMoon />}
          </Button>
          {currentUser ? (
            <div className="flex items-center gap-2">
              <span className="text-black">@{currentUser.username}</span>
              <Button onClick={handleSignout} outline>
                Sign out
              </Button>
            </div>
          ) : (
            <Link to="/sign-in">
              <Button gradientDuoTone="purpleToBlue" outline>
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </div>

      <div className="flex justify-center py-2">
        <Link
          to="/"
          className={`mr-4 ${
            path === "/" ? "text-blue-500" : "text-gray-300 hover:text-blue-500"
          }`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`mr-4 ${
            path === "/about"
              ? "text-blue-500"
              : "text-gray-300 hover:text-blue-500"
          }`}
        >
          About
        </Link>
        <Link
          to="/mobile"
          className={`mr-4 ${
            path === "/mobile"
              ? "text-blue-500"
              : "text-gray-300 hover:text-blue-500"
          }`}
        >
          Mobiles
        </Link>
        <Link
          to="/laptop"
          className={`mr-4 ${
            path === "/laptop"
              ? "text-blue-500"
              : "text-gray-300 hover:text-blue-500"
          }`}
        >
          Laptops
        </Link>
      </div>
    </Navbar>
  );
}
