import React from 'react';
import { useLocation } from 'react-router-dom';

const Detail = () => {
  const location = useLocation();
  const { state } = location;

  if (!state) {
    return <div>No se encontraron detalles de médico</div>;
  }

  const { name, email, phone, website } = state;

  return (
    <div>
      <h1 className="text-4xl font-bold pt-7 mb-7">Detalles del médico</h1>
      <table>
        <tbody>
          <tr>
            <td><strong>Nombre:</strong></td>
            <td>{name}</td>
          </tr>
          <tr>
            <td><strong>Correo:</strong></td>
            <td>{email}</td>
          </tr>
          <tr>
            <td><strong>Teléfono:</strong></td>
            <td>{phone}</td>
          </tr>
          <tr>
            <td><strong>Página web:</strong></td>
            <td>{website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Detail;

