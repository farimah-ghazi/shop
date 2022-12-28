import styles from "./Header.module.css";
import pic1JPG from "../../assets/pic1.jpg";
import pic2JPG from "../../assets/pic2.jpg";
import pic3JPG from "../../assets/pic3.jpg";

import { useState } from "react";


const data = {
  images: [pic1JPG, pic2JPG, pic3JPG],
};

function Header() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <div className={styles.container}>
      
      <div className={styles.slideBar}>
        {data.images.map((image, index) => {
          return (
            <img
              key={index}
              src={image}
              className={index === selectedImageIndex ? styles.selected : ""}
              onClick={() => {
                setSelectedImageIndex(index);
              }}
            />
          );
        })}
    
      </div>
    

      <a href="#" className={styles.prev} 
              >
        &#10095;
      </a>
      <a href="#" className={styles.next}>
        &#10094;
      </a>
    </div>
  );
}

export default Header;
