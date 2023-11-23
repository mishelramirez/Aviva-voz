import style from "./styles.module.css";
import logofooter from "../../assets/footer/logo.footer.jpg"


const Footer = () => {
     return (
        <div className={style["container-footer"]}>
          <div className={style["container-footer"]}>
            <img className={style["img-footer"]} src={logofooter} alt="imgfooter" />
        </div>
        <div className={style["footer-box2"]}>
            texto footer
        </div>
        </div>
     );
};
export default Footer;