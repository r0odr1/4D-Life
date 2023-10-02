import Image from "next/image";
import Layout from "@/components/Layout";
import { formatearFecha } from "@/helpers";
import styles from "../../styles/Entrada.module.css";

const EntradaBlog = ({ entrada }) => {
  const { titulo, imagen, publishedAt, contenido } = entrada.attributes;
  return (
    <>
      <Layout>
        <main className="contenedor">
          <h1 className="heading">{titulo}</h1>
          <article className={styles.entrada}>
            <Image
              layout="responsive"
              width={800}
              height={600}
              src={imagen.data.attributes.url}
              alt={`Imagen entrada ${titulo}`}
            />
            <div className={styles.contenido}>
              <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
              <p className={styles.texto}>{contenido}</p>
            </div>
          </article>
        </main>
      </Layout>
    </>
  );
};

export async function getStaticPaths() {
  const url = `${process.env.API_URL}/api/blogs?populate=*`;
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
  const url = `${process.env.API_URL}/api/blogs/${id}?populate=*`;
  const respuesta = await fetch(url);
  const entrada = await respuesta.json();

  return {
    props: {
      entrada: entrada.data,
    },
  };
}

//export async function getServerSideProps({ params: { id } }) {
//  const url = `${process.env.API_URL}/api/blogs/${id}?populate=*`;

//  const respuesta = await fetch(url);
//  const entrada = await respuesta.json();

//  return {
//    props: {
//      entrada: entrada.data,
//    },
//  };
//}

export default EntradaBlog;
