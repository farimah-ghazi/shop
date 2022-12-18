import MenuBar from "../../components/menuBar/MenuBar";
import Footer from "../../components/footer/Footer";
import styles from "./Product.module.css";
import shirt1JPG from "../../assets/shirt/shirt1.jpg";
import shirt2JPG from "../../assets/shirt/shirt2.jpg";
import shirt3JPG from "../../assets/shirt/shirt3.jpg";
import shirt4JPG from "../../assets/shirt/shirt4.jpg";

function Product() {
    function submit() {
        const input = document.querySelector(".title");
        const list = document.querySelector("#list");

       

        let item = document.createElement("div");
        item.classList.add("sale");
        item.innerHTML = `<input type="checkbox" />
          <div>${input.value}</div>
          <img src="./delete.png"  onclick="removeItem(this)"/>`;
        list.append(item);
        input.value = "";
      }
  return (
    <div>
      <MenuBar />
      <div className={styles.container}>
        <div className={styles.product}>
          <div className={styles.smallPic}>
            <img src={shirt1JPG} />
            <img src={shirt2JPG} />
            <img src={shirt3JPG} />
            <img src={shirt4JPG} />
          </div>
          <img src={shirt3JPG} />
          <h2  className={styles.title}>پیرهن مردانه</h2>
          <p>
            ویژگی‌ها
            <br />
            جنس:الیاف نخی
            <br />
            قد:روی باسن
            <br />
            آستین:بلند
            <br />
            مورداستفاده:اسپرت و روزمره
          </p>
        </div>
        <button className={styles.add} onClick={submit}>+</button>
        <p className={styles.paragraph}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
          داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
          پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
          سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
