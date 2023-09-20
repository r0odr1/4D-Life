import Image from "next/image";
import Layout from "@/components/Layout";
import styles from "../styles/about.module.css";

const Nosotros = () => {
  return (
    <Layout pagina="Nosotros">
      <main className="contenedor">
        <h2 className="heading">Este es el about</h2>
        <div className={styles.contenido}>
          <Image
            layout="responsive"
            width={600}
            height={450}
            src="/img/buzo-gris-4d.png"
            alt="Imagen sobre nosotros"
          />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              rhoncus pellentesque enim vel scelerisque. Integer at pulvinar
              sapien. Phasellus viverra, lectus vitae blandit bibendum, felis
              tortor commodo diam, accumsan fermentum ex elit in dolor. Proin
              sodales libero ut urna tristique consectetur. Fusce malesuada
              neque felis, id ullamcorper diam sodales sed. Donec ut sagittis
              sem. In dignissim orci eu purus dapibus dictum. Sed malesuada,
              justo non vulputate pulvinar, lacus lacus molestie ligula,
              ullamcorper vehicula diam sem et dolor. Ut convallis turpis sit
              amet mi tempus, id fringilla nunc dapibus. Suspendisse lobortis.
            </p>

            <p>
              Vivamus varius nisl mi, eget volutpat tortor placerat vitae.
              Praesent commodo porttitor metus. Ut bibendum vitae est vitae
              condimentum. Praesent neque erat, volutpat vitae tellus sit amet,
              iaculis dignissim arcu. Praesent mattis lectus non tellus
              eleifend, sit amet egestas nulla pharetra. Donec lacus erat,
              hendrerit ac sodales sit amet, gravida id lorem. Nam facilisis
              lacinia neque, rhoncus fermentum urna interdum vitae. Duis a
              rhoncus nisl, nec ornare augue. Suspendisse at dolor ullamcorper.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
