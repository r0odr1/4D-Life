import Layout from "@/components/Layout";
import Entrada from "@/components/Entrada";

const Blog = ({ entradas }) => {
  console.log(entradas);
  return (
    <Layout pagina="Blog">
      <main className="contenedor">
        <h2 className="heading">Este es el blog</h2>

        <div>
          {entradas.map((entrada) => (
            <Entrada key={entrada.id} entrada={entrada} />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  const url = "http://localhost:1337/api/blogs";
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();

  return {
    props: {
      entradas: entradas.data,
    },
  };
}

export default Blog;
