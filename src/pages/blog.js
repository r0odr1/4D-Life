import Layout from "@/components/Layout";

const Blog = ({ entradas }) => {
  console.log(entradas);
  return (
    <Layout pagina="Blog">
      <h1 className="heading">Este es el blog</h1>
    </Layout>
  );
};

export async function getStaticProps() {
  const url = "http://localhost:1337/api/blogs";
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();

  console.log(entradas);

  return {
    props: {
      entradas,
    },
  };
}

export default Blog;
