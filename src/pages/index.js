import Layout from "@/components/Layout";
import Buzo from "@/components/Buzo";
import styles from "../styles/Listado.module.css";
import Bloque from "@/components/Bloque";

export default function Home({ buzos, bloque }) {
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
    </Layout>
  );
}

export async function getStaticProps() {
  const urlBuzos = `${process.env.API_URL}/api/buzos?populate=*`;
  const urlBloque = `${process.env.API_URL}/api/bloque?populate=*`;

  const [resBuzos, resBloque] = await Promise.all([
    fetch(urlBuzos),
    fetch(urlBloque),
  ]);

  const [buzos, bloque] = await Promise.all([
    resBuzos.json(),
    resBloque.json(),
  ]);

  return {
    props: {
      buzos: buzos.data,
      bloque: bloque.data,
    },
  };
}
