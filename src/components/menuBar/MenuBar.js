import styles from "./MenuBar.module.css";
import LogoshopJPG from "../../assets/logoshop.jpg"

function MenuBar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logoName}>
        <img src={LogoshopJPG} className={styles.logo} />
        <div>شاپ</div>
      </div>
      <div className={styles.nav}>
        <ul>
          <li>
            <a href="#">محصولات</a>
          </li>
          <li>
            
            <a href="#">سبدخرید</a>
          </li>
          <li>
            <a href="#">درباره ما</a>
          </li>
        </ul>
      </div>
      <div className={styles.enter}>
        <a href="#">ورود</a>
      </div>
    </div>
  );
}

export default MenuBar;
