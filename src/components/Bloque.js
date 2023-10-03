import styles from "../styles/Bloque.module.css";

const Bloque = ({ bloque }) => {
  const { titulo, contenido, imagen } = bloque.attributes;
  return (
    <section>
      <div className={`contenedor ${styles.grid}`}>
        <div className={styles.contenido}>
          <h2 className="heading">{titulo}</h2>
          <p className={styles.texto}>{contenido}</p>
          <a className={styles.enlace} href="#">
            Más información
          </a>
        </div>
      </div>
      <style jsx>
        {`
          section {
            padding: 10rem 0;
            margin-top: 10rem;
            background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7 )), url(${imagen.data.attributes.url});
            background-size: cover;
            background-position: 50%;
          }

          media
        `}
      </style>
    </section>
  );
};

export default Bloque;
