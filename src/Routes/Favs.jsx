import React, { useEffect, useState } from 'react';

const Favs = () => {
  const [favoriteUser, setFavoriteUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('favoriteUser'));

    if (storedUser) {
      setFavoriteUser(storedUser);
    }
  }, []);

  return (
    <div className='mt-7'>
      <style>
        {`
          .user-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }

          .user-card {
            text-align: center;
            border: 1px solid #ddd;
            padding: 10px;
          }

          .user-card img {
            width: 50%;
            display: block;
            margin: 0 auto;
          }
        `}
      </style>

      <h1 className="text-4xl font-bold pt-7 mb-7">Favoritos</h1>
      {favoriteUser && (
        <div className="user-grid">
          <div key={favoriteUser.id} className="user-card">
            <img src="/images/doctor.jpg" alt="Avatar" />
            <div>
              <strong>Código:</strong> {favoriteUser.id} <br />
              <strong>Nombre usuario:</strong> {favoriteUser.username} <br />
              <strong>Nombre del médico:</strong> {favoriteUser.name}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Favs;
