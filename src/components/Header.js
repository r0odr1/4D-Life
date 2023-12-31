import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.toolbar}>
          <Link href={"/"}>
            <Image
              width={100}
              height={100}
              src="/img/Logo_4d_blanco.png"
              alt="Imagen logo"
            />
          </Link>
          <nav className={styles.navigation}>
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/tienda">Tienda</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
