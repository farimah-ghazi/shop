import styles from "./Promotions.module.css";
import shoes1JPG from "../../assets/shoes1.jpg";
import pantsJPEG from "../../assets/pants.jpeg";
import dressJPG from "../../assets/dress.jpg";
import shirtJPG from "../../assets/shirt.jpg";




function Promotions() {
  return ( 
    
    <div className={styles.ctg}>
       
      <div>
        <h2>تخفیفات</h2>
      </div>
      <div className={styles.promotBox}>
        <div className={styles.promotTitle}>
          <h3>تخفیفات ویژه</h3>
          <p>برای عالی بودن هم کم هزینه کنید</p>
        </div>
     
        <div className={styles.container}>
          <div className={styles.shoes}>
            <a href="#"><img src={shoes1JPG} /></a>
            <div className={styles.red}><p>%</p></div>
          </div>
          <div className={styles.pant}>
          <a href="#"><img src={pantsJPEG} /></a>
          <div className={styles.red}><p>%</p></div>

          </div>

          <div className={styles.dress}>
          <a href="#"><img src={dressJPG} /></a>
          <div className={styles.red}><p>%</p></div>

          </div>
          <div className={styles.shirt}>
          <a href="#"><img src={shirtJPG} /></a>
          <div className={styles.red}><p>%</p></div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Promotions;
