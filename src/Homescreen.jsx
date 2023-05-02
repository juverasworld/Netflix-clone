import "./Homescreen.css"
import Navbar from "./Navbar";
import Banner from "./Banner";
import Row from "./Row";
const Homescreen = () => {
    return ( 
        <div className="Homescreen">
            <Navbar/>
            <Banner/>
            <Row/>
        </div>
     );
}
 
export default Homescreen;