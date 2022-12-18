import Footer from "../../components/footer/Footer";
import MenuBar from "../../components/menuBar/MenuBar";
import styles from "./Cart.module.css";
import cancelPNG from "../../assets/cancel.png"

function Cart() {
  return (
    <div className={styles.container}>
        <MenuBar/>
        <h2>سبدخرید</h2>
        <div className={styles.sale}>
            <img src={cancelPNG}/>
        </div>
        <Footer/>
    </div>
  );
}

export default Cart;
