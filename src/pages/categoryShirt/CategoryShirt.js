import styles from "./CategoryShirt.module.css";
import MenuBar from "../../components/menuBar/MenuBar";
import Footer from "../../components/footer/Footer";
import shirt1JPG from "../../assets/sampleshirt/shirt1.jpg";
import shirt2JPG from "../../assets/sampleshirt/shirt2.jpg";
import shirt3JPG from "../../assets/sampleshirt/shirt3.jpg";
import shirt4JPG from "../../assets/sampleshirt/shirt4.jpg";
import shirt5JPG from "../../assets/sampleshirt/shirt5.jpg";
import shirt6JPG from "../../assets/sampleshirt/shirt6.jpg";
import shirt7JPG from "../../assets/sampleshirt/shirt7.jpg";
import shirt8JPG from "../../assets/sampleshirt/shirt8.jpg";
import Layout from "../../components/layout/Layout";

function CategoryShirt() {
  return (
    <>
      <div className={styles.container}>
        <h2>کفش اسپرت</h2>

        <div className={styles.category}>
          <a href="../product">
            <img src={shirt1JPG} />
          </a>
          <a href="../product">
            <img src={shirt2JPG} />
          </a>
          <a href="../product">
            <img src={shirt3JPG} />
          </a>
          <a href="../product">
            <img src={shirt4JPG} />
          </a>
        </div>
        <div className={styles.category}>
          <a href="../product">
            <img src={shirt5JPG} />
          </a>
          <a href="../product">
            <img src={shirt6JPG} />
          </a>
          <a href="../product">
            <img src={shirt7JPG} />
          </a>
          <a href="../product">
            <img src={shirt8JPG} />
          </a>
        </div>
      </div>
    </>
  );
}

export default CategoryShirt;
