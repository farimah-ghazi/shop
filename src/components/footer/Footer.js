import styles from "./Footer.module.css";
import LogoshopJPG from "../../assets/logoshop.jpg";
import trustJPG from "../../assets/trust.jpg";

function Footer() {
  return (
    <div className={styles.containerFluid}>
      <div className={styles.container}>
        <div className={styles.address}>
          <h4>ارتباط با ما</h4>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
        
          </p>
        </div>
        <div className={styles.address}>
          <h4>ساعت کاری</h4>
          <p>لورم ایپسوم متن ساختگی <br/>با تولید سادگی نامفهوم </p>
        </div>
        <div>
          <img src={LogoshopJPG} />
        </div>
        <div className={styles.trust}>
          <img src={trustJPG} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
