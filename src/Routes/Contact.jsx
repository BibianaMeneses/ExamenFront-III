import React from "react";
import Form from "../components/Form";

const Contact = (props) => {
  console.log(props);

  return (
    <div className="mt-10">
      <h2 className="text-left text-2xl font-bold">
        ¿Quieres obtener más información?
      </h2>
      <p className="text-left">
        Envíanos tus preguntas y te contactaremos lo más pronto posible
      </p>
      <Form />
    </div>
  );
};

export default Contact;
