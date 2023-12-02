import { useReducer } from "react";

const storedUserData = JSON.parse(localStorage.getItem("favoriteUsers"));

const reducer = (users, action) => {
  switch (action.type) {
    case 'deleteUser':
      const index = users.indexOf(action.user);
      users.splice(index, 1);
      console.log(users);
      localStorage.setItem("favoriteUsers", JSON.stringify(users));
      location.reload();
      return users;
    default:
      return users;
  }
};

const Favs = () => {
  const [users, dispatch] = useReducer(reducer, storedUserData);

  const handleDeleteFavorite = (user) => {
    dispatch({
      type: 'deleteUser',
      user: user
    });
  }

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

          .delete-favorite-button {
            margin-top: 10px;
            background-color: #ff333c;
            color: black;
            border-radius: 10px;
            padding: 8px 16px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 15px;
            cursor: pointer;
          }
        `}
      </style>
      <h1 className="text-4xl font-bold pt-7 mb-7">Favoritos</h1>
      <div className="user-grid">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <img src="/images/doctor.jpg" alt="Foto médico" />
            <div className="mt-5">
              <strong>Nombre:</strong> {user.name}
            </div>
            <div>
              <button
                className="delete-favorite-button"
                onClick={() => handleDeleteFavorite(user)}
              >
                Eliminar de favoritos
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Favs;