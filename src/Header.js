import React, { useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import Logo from "./logo-1.png";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=319f13bb4a2b48bfbb1271eadd29e2cb&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-top-read";

export default function Header() {
  const { loggedIn, setLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoggedIn(!!token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    window.location.href = "/";
  };

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/dashboard" className="flex items-center">
          <img src={Logo} className="h-6 mr-3 sm:h-9 " alt="Tinderfy Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Tindefy
          </span>
        </a>

        {loggedIn ? (
          <div className="flex md:order-2">
            <button
              onClick={handleLogout}
              className="text-white bg-primary hover:bg-cyan-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-primary dark:hover:bg-cyan-500"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex md:order-2">
            <button
              onClick={() => (window.location.href = AUTH_URL)}
              className="text-white bg-primary hover:bg-cyan-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-primary dark:hover:bg-cyan-500"
            >
              Login
            </button>
          </div>
        )}

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {/* ... */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
