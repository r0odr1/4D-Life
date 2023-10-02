import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Buzo.module.css";

const Buzo = ({ buzo }) => {
  const { descripcion, imagen, nombre, precio, url } = buzo.attributes;
  return (
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
        <Link href={`/buzos/${url}`} className={styles.enlace}>
          Ver Producto
        </Link>
      </div>
    </div>
  );
};

export default Buzo;
