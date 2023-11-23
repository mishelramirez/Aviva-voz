import {Routes, Route} from "react-router-dom"
import Otros from "../page/otros"
import Home from "../components/home"


const Routess = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/otros" element={<Otros/>}/>
        </Routes>
    )
}

export default Routess