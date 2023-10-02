import Layout from "@/components/Layout";
import Buzo from "@/components/Buzo";
import styles from "../styles/Listado.module.css";

const Tienda = ({ buzos }) => {
  return (
    <Layout pagina="Tienda Virtual">
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>
        <div className={styles.listado}>
          {buzos.map((buzo) => {
            const { id, attributes } = buzo;

            return <Buzo key={id} buzo={{ ...attributes, id }} />;
          })}
        </div>
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  const url = `${process.env.API_URL}/api/buzos?populate=*`;
  const respuesta = await fetch(url);
  const buzos = await respuesta.json();

  console.log(buzos);

  return {
    props: {
      buzos: buzos.data,
    },
  };
}

export default Tienda;
