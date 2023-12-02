import React from "react";
import Form from "../components/Form";

const Contact = (props) => {
  console.log(props);

  return (
    <div className="mt-10">
      <h2 className="text-center text-2xl font-bold">
        ¿Quieres obtener más información?
      </h2>
      <p className="text-center">
        Envíanos tus preguntas y te contactaremos lo más pronto posible
      </p>
      <Form />
    </div>
  );
};

export default Contact;
