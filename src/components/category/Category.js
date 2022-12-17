import styles from "./Category.module.css";
import shoes1JPG from "../../assets/shoes1.jpg";
import pantsJPEG from "../../assets/pants.jpeg";
import dressJPG from "../../assets/dress.jpg";
import shirtJPG from "../../assets/shirt.jpg";




function Category() {
  return ( 
    
    <div className={styles.ctg}>
       
      <div>
        <h2>محصولات</h2>
      </div>
     
      <div className={styles.container}>
        <div className={styles.shoes}>
          <a href="#"><img src={shoes1JPG} /></a>
        </div>
        <div className={styles.pant}>
        <a href="#"><img src={pantsJPEG} /></a>
        </div>

        <div className={styles.dress}>
        <a href="#"><img src={dressJPG} /></a>
        </div>
        <div className={styles.shirt}>
        <a href="#"><img src={shirtJPG} /></a>
        </div>
      </div>
    </div>
  );
}

export default Category;
