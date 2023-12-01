import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-100 flex">
      <div className="block">
        <h3 className="text-2xl font-semibold pt-4">
          <span className="text-red-600 font-semibold">DH</span> Odontología Olga&Bibiana
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
        <div className="pt-6">
        <button className="font-semibold" id="cambiarTema">Tema</button>
      </div>
      </nav>
    </div>
  );
};

export default Navbar;
