import Header from "./components/header/index";
import Home from "./components/home";
import Footer from "./components/footer";
import Routess from "./rutas/routes"
import './app.css'


const App = () => {
  return(
    <>
    <Header/>
    <Routess/>
    <Home/>
    <Footer/>
    </>
  )
}

export default (App)