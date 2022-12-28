import Footer from "../../components/footer/Footer";
import MenuBar from "../../components/menuBar/MenuBar";
import styles from "./Cart.module.css";
import cancelPNG from "../../assets/cancel.png";
import Layout from "../../components/layout/Layout";

function Cart() {
  return (
    <>
      
      <div className={styles.container}>
        <h2>سبدخرید</h2>

        <div className={styles.sale}>
          <img src={cancelPNG} />
        </div>
      </div>
    </>
  );
}

export default Cart;
