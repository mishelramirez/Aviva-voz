import imgbanner from "../../assets/home/comunidad.jpg"
import style from "./styles.module.css";

const Home = () => {
     return (
        <div className={style["container-home"]}>
        <div className={style["container-banner"]}>
            <img className={style["img-banner"]} src={imgbanner} alt="imgbanner" />
        </div>

        <div>

           <h1>TEXTO RELLENO </h1> 
        </div>
        </div>
     );
};
export default Home;