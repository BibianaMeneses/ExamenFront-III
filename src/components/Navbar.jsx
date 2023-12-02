import React from "react";
import { Link } from "react-router-dom";
import useDarkMode from "./utils/useDarkMode";

const Navbar = () => {
  const [darkMode, toggleDarkMode] = useDarkMode();
  return (
    <div className="bg-gray-400 flex">
      <div className="block">
        <h3 className="text-2xl font-semibold">
          <span className="text-red-600 font-bold">DH</span> Odontología Olga&Bibiana
        </h3>
      </div>
      <nav className="justify-end">
        <Link to="/home">
          <h4 className="font-semibold">Home</h4>
        </Link>
        <Link to="/contacto">
          <h4 className="font-semibold">Contacto</h4>
        </Link>
        <Link to="/favs">
          <h4 className="font-semibold">Favoritos</h4>
        </Link>
        <div className="pt-1">
          <button className="toggleButton" onClick={() => toggleDarkMode()}>{darkMode ? 'Light' : 'Dark'}</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
