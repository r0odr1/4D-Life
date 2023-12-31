import Image from "next/image";
import Layout from "@/components/Layout";
import styles from "../../styles/Buzo.module.css";

const Producto = ({ buzo }) => {
  const { descripcion, imagen, nombre, precio } = buzo.attributes;

  return (
    <>
      <Layout pagina={`Buzo ${nombre}`}>
        <div className={styles.buzo}>
          <Image
            layout="responsive"
            width={500}
            height={350}
            src={imagen.data.attributes.url}
            alt={`Imagen Buzo ${nombre}`}
          />
          <div className={styles.contenido}>
            <h3>{nombre}</h3>
            <p className={styles.descripcion}>{descripcion}</p>
            <p className={styles.precio}>${precio}</p>
            <form className={styles.formulario}>
              <label>Cantidad:</label>

              <select>
                <option value="">-- Select --</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>

              <input type="submit" value="Agregar al Carrito" />
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export async function getStaticPaths() {
  const url = `${process.env.API_URL}/api/buzos?populate=*`;
  const respuesta = await fetch(url);
  const buzos = await respuesta.json();
  const paths = buzos.data.map((buzo) => ({
    params: { id: buzo.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  const url = `${process.env.API_URL}/api/buzos/${id}?populate=*`;
  const respuesta = await fetch(url);
  const buzo = await respuesta.json();
  console.log(buzo);

  return {
    props: {
      buzo: buzo.data,
    },
  };
}

// export async function getServerSideProps({ params: { id } }) {
//   const url = `${process.env.API_URL}/api/buzos/${id}?populate=*`;
//   const respuesta = await fetch(url);
//   const buzo = await respuesta.json();
//   console.log(buzo.data);

//   return {
//     props: {
//       // buzo: buzo.data,
//     },
//   };
// }

export default Producto;
