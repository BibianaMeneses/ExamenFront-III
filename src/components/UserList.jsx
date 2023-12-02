import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const addFavs = (user) => {
    let favoriteUsers = JSON.parse(localStorage.getItem("favoriteUsers"))
    if(favoriteUsers == null){
      favoriteUsers = [];
    }
    favoriteUsers.push(user)
    localStorage.setItem("favoriteUsers", JSON.stringify(favoriteUsers));
    window.location.href = "/favs";
    console.log(`Usuario ${user.id} añadido a favoritos`);
  };

  const viewDetails = (user) => {
    console.log(`Médico ${user.id} seleccionado`);
    localStorage.setItem("selectedDoctor", JSON.stringify(user));
    navigate(`/Detail/${user.id}`, {
      state: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        website: user.website,
      },
    });
  };

  return (
    <div className="mt-6">
      <style>
        {`
          .user-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 30px;
          }

          .user-card {
            text-align: center;
            padding: 30px;
          }

          .user-card img {
            width: 50%;
            display: block;
            margin: 0 auto;
          }

          .favorite-button {
            margin-top: 10px;
            background-color: #FF7F50;
            color: black;
            border-radius: 10px;
            padding: 8px 16px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 15px;
            cursor: pointer;
          }
          .doctor-button {
            background-color: #00FFFF;
            margin-top: 10px;
            color: black;
            border-radius: 10px;
            padding: 8px 16px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            cursor: pointer;
          }

        `}
      </style>

      <div className="user-grid">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <img src="/images/doctor.jpg" alt="Foto médico" />
            <div className="mt-5">
              <strong>Nombre:</strong> {user.name}
            </div>
            <div>
              <button
                className="favorite-button"
                onClick={() => addFavs(user)}
              >
                Agregar a favoritos
              </button>
            </div>
            <div>
              <button
                className="doctor-button"
                onClick={() => viewDetails(user)}
              >
                Ver detalles
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
