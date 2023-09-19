import Head from "next/head";
import Header from "./Header";

const Layout = ({ children, pagina }) => {
  const pageTitle = `4D-Life - ${pagina}`;
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
