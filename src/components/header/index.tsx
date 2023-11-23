import style from "./styles.module.css";
import logo from "../../assets/header/logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={style["container-header"]}>
      <img className={style["img-logo"]} src={logo} alt="logo" />

      <div className={style["container-link"]}>
        
          <Link to="/contacto"> hola</Link>
       
        
          <Link to="/contacto">hasta pronto</Link>
       
        
          <Link to="/contacto">buena tafrde</Link>
        
        
          <Link to="/contacto">adios</Link>
        
      </div>
    </div>
  );
};

export default Header;
