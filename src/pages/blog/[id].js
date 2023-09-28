const EntradaBlog = (entrada) => {
  console.log(entrada);
  return (
    <div>
      <h1>Desde entrada Blog</h1>
    </div>
  );
};

export async function getStaticPaths() {
  const url = "http://localhost:1337/api/blogs?populate=*";
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();
  const paths = entradas.data.map((entrada) => ({
    params: { id: entrada.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  const url = `http://localhost:1337/api/blogs/${id}?populate=*`;
  const respuesta = await fetch(url);
  const entrada = await respuesta.json();

  return {
    props: {
      entrada: entrada.data,
    },
  };
}

export default EntradaBlog;
