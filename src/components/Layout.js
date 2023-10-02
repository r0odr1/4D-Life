import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, pagina }) => {
  const pageTitle = `4D-Life - ${pagina}`;
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
