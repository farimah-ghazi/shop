import styles from "./Header.module.css";
import pic1JPG from "../../assets/pic1.jpg";
import pic2JPG from "../../assets/pic2.jpg";
import pic3JPG from "../../assets/pic3.jpg";

function Header() {


  return (
    <div className={styles.container}>
      <div className={styles.slideBar}>
        <img src={pic1JPG} />
      </div>
      <div className={styles.slideBar}>
        <img src={pic3JPG} />
      </div>
      <div className={styles.slideBar}>
        <img src={pic2JPG} />
      </div>

      <a href="#" className={styles.prev} >
        &#10095;
      </a>
      <a href="#" className={styles.next} >
        &#10094;
      </a>
    </div>
  );
}

export default Header;
