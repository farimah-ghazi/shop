import styles from "./Features.module.css";
import LogoshopJPG from "../../assets/logoshop.jpg";

function Features() {
  return (
    <div className={styles.container}>
      <div>
        <h2>ماه شاپ</h2>
      </div>
      <div className={styles.features}>
        <div>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
        </div>
        <div>
          <img src={LogoshopJPG} />
        </div>
      </div>
    </div>
  );
}

export default Features;
