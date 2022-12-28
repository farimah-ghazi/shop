import Footer from "../footer/Footer";
import MenuBar from "../menuBar/MenuBar";

function Layout({ children }) {
  return (
    <>
      <MenuBar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
