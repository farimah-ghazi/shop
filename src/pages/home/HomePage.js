// import styles from "./HomePage.module.css";
import MenuBar from "../../components/menuBar/MenuBar";
import Header from "../../components/header/Header";
import Category from "../../components/category/Category";
import Features from "../../components/features/Features";
import Promotions from "../../components/promotions/Promotions";
import Footer from "../../components/footer/Footer";

function HomePage() {
  return (
    <div>
      <MenuBar />
      <Header/>
      <Category/>
      <Features/>
      <Promotions/>
      <Footer/>
    </div>
  );
}

export default HomePage;
