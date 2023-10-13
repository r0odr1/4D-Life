import Layout from "@/components/Layout";
import Buzo from "@/components/Buzo";
import styles from "../styles/Listado.module.css";
import Bloque from "@/components/Bloque";
import ListadoBlog from "@/components/ListadoBlog";

export default function Home({ buzos, bloque, entradas }) {
  return (
    <Layout pagina="Inicio">
      <main className="contenedor">
        <h1 className="heading">Nuestra Coleccion</h1>
        <div className={styles.listado}>
          {buzos.map((buzo) => {
            const { id, attributes } = buzo;

            return <Buzo key={id} buzo={{ ...attributes, id }} />;
          })}
        </div>
      </main>
      <Bloque bloque={bloque} />
      <section className="contenedor">
        <ListadoBlog entradas={entradas} />
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const urlBuzos = `${process.env.API_URL}/api/buzos?populate=*`;
  const urlBloque = `${process.env.API_URL}/api/bloque?populate=*`;
  const urlBlog = `${process.env.API_URL}/api/blogs?filters[id][$in][0]=1&filters[id][$in][1]=2&filters[id][$in][2]=3&populate=*`;

  const [resBuzos, resBloque, resBlog] = await Promise.all([
    fetch(urlBuzos),
    fetch(urlBloque),
    fetch(urlBlog),
  ]);

  const [buzos, bloque, entradas] = await Promise.all([
    resBuzos.json(),
    resBloque.json(),
    resBlog.json(),
  ]);

  return {
    props: {
      buzos: buzos.data,
      bloque: bloque.data,
      entradas: entradas.data,
    },
  };
}
