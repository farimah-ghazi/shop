import styles from "./Category.module.css";
import shoes1JPG from "../../assets/shoes1.jpg";
import pantsJPEG from "../../assets/pants.jpeg";
import dressJPG from "../../assets/dress.jpg";
import shirtJPG from "../../assets/shirt.jpg";
// import { useState } from "react"; 

const dataCtg = {
  right : "0px",
}


function Category() {
 
  // const [selectButton, setSelectButton] = useState(0);

  return ( 
    
    <div className={styles.ctg} >
       
      <div>
        <h2>محصولات</h2>
      </div>
     
      <div className={styles.container}>
        <div className={styles.sample}   
        // style={{right:r+'px'}}
        >
        <div className={styles.shoes}>
          <a href="#"><img src={shoes1JPG} /></a>
        </div>
        <div className={styles.pant}>
        <a href="#"><img src={pantsJPEG} /></a>
        </div>
        <div className={styles.pant}>
        <a href="#"><img src={pantsJPEG} /></a>
        </div>
        <div className={styles.pant}>
        <a href="#"><img src={pantsJPEG} /></a>
        </div>
        <div className={styles.pant}>
        <a href="#"><img src={pantsJPEG} /></a>
        </div>
        <div className={styles.pant}>
        <a href="#"><img src={pantsJPEG} /></a>
        </div>

        <div className={styles.dress}>
        <a href="#"><img src={dressJPG} /></a>
        </div>
        <div className={styles.shirt}>
        <a href="./categoryShirt"><img src={shirtJPG} /></a>
        </div>
        <div className={styles.shoes}>
          <a href="#"><img src={shoes1JPG} /></a>
        </div>
        </div>
        <a href="" className={styles.prev}  
        // onClick={() => {
        // r=100;
        // }}
        >&#10095;</a>
        <a href="" className={styles.next} 
        // onClick={() => {
        // r=100;
        // }}
        >&#10094;</a>
      </div>
    </div>
  );
}

export default Category;
