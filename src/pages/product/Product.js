import styles from "./Product.module.css";
import shirt1JPG from "../../assets/shirt/shirt1.jpg";
import shirt2JPG from "../../assets/shirt/shirt2.jpg";
import shirt3JPG from "../../assets/shirt/shirt3.jpg";
import shirt4JPG from "../../assets/shirt/shirt4.jpg";

import { useState } from "react";

const DATA = {
  images: [shirt1JPG, shirt2JPG, shirt3JPG, shirt4JPG],
  title: "پیرهن مردانه",
  features: {
    material: "الیاف نخی",
    height: "روی باسن",
    sleeve: "بلند",
    usage: "اسپرت و روزمره",
  },
  description: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
  از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
  سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
  متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
  درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
  نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
  خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
  داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
  پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
  سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.`,
};

function Product() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.product}>
          <div className={styles.smallPic}>
            {DATA.images.map((image, index) => {
              return (
                <img
                  key={index}
                  src={image}
                  className={
                    index === selectedImageIndex ? styles.selected : ""
                  }
                  onClick={() => {
                    setSelectedImageIndex(index);
                  }}
                />
              );
            })}
          </div>
          <img src={DATA.images[selectedImageIndex]} />
          <h2 className={styles.title}>{DATA.title}</h2>
          <div>
            <p>ویژگی‌ها</p>
            <p>جنس: {DATA.features.material}</p>
            <p>قد: {DATA.features.height}</p>
            <p>آستین: {DATA.features.sleeve}</p>
            <p>مورداستفاده: {DATA.features.usage}</p>
          </div>
        </div>
        <button className={styles.add}>+</button>
        <p className={styles.paragraph}>{DATA.description}</p>
      </div>
    </>
  );
}

export default Product;
