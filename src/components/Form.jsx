import { useState, useEffect } from "react";

const Form = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [valor, setValor] = useState("");

  const [error, setError] = useState(false);
  const [errorNombre, setErrorNombre] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, email].includes("")) {
      setError(true);
      setErrorNombre(false);
      setValor("");

      return;
    }

    if (nombre.length < 5 || nombre.trim() !== nombre) {
      setErrorNombre(true);
      setError(false);
      setValor("");

      return;
    }

    if ([nombre, email]) {
      setValor(nombre);
      setError(false);
      setErrorNombre(false);
      setNombre("");
      setEmail("");
      return;
    }

    setError(false);
    setErrorNombre(false);

    // Reiniciar el form
    setNombre("");
    setEmail("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="my-10">
        {error && (
          <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
            <p>Verificar información</p>
          </div>
        )}

        {errorNombre && (
          <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
            <p>Verificar información</p>
          </div>
        )}

        <div>
          <label htmlFor="nombre"></label>
          <input
            id="nombre"
            type="text"
            placeholder="Digite su nombre completo"
            className="border-2 w-full p-2 mt-2"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email"></label>
          <input
            id="id"
            type="email"
            placeholder="Digite su email"
            className="border-2 w-full p-2 mt-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-gray-200 w-full p-1 mt-2 text-black cursor-pointer h-12 border-solid border-2 border-black"
          value="Send"
        />
      </form>

      {valor && (
        <div>
          <p>Muchas gracias {valor} por preferirno. Nos prondremos en contacto contigo a través de tu corre electrónico</p>
        </div>
      )}
    </div>
  );
};

export default Form;
