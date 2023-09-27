const Entrada = ({ entrada }) => {
  const { id, titulo } = entrada;

  console.log("entrada", id, titulo);

  return (
    <article>
      <div>
        <h1>{id}</h1>
        <p>{titulo}</p>
      </div>
    </article>
  );
};

export default Entrada;
