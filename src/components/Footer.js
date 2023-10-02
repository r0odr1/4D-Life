import Link from "next/link";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
        <nav className={styles.navigation}>
          <Link href="/">Inicio</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/tienda">Tienda</Link>
        </nav>
        <p className={styles.copy}>Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
