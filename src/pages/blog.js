import Layout from "@/components/Layout";
import Entrada from "@/components/Entrada";
import styles from "../styles/Blog.module.css";

const Blog = ({ entradas }) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/blogs?populate=*`;
  return (
    <Layout pagina="Blog">
      <main className="contenedor">
        <h2 className="heading">Este es el blog</h2>

        <div className={styles.blog}>
          {entradas.map((entrada) => {
            const { id, attributes } = entrada;

            return <Entrada key={id} entrada={{ ...attributes, id }} />;
          })}
        </div>
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  const url = `${process.env.API_URL}/api/blogs?populate=*`;
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();

  return {
    props: {
      entradas: entradas.data,
    },
  };
}

export default Blog;
