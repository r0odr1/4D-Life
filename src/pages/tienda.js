import Layout from "@/components/Layout";
import Listado from "@/components/Listado";

const Tienda = ({ buzos }) => {
  return (
    <Layout pagina="Tienda Virtual">
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>
        <Listado buzos={buzos} />
      </main>
    </Layout>
  );
};

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/api/buzos?populate=*`;
  const respuesta = await fetch(url);
  const buzos = await respuesta.json();

  return {
    props: {
      buzos: buzos.data,
    },
  };
}

export default Tienda;
