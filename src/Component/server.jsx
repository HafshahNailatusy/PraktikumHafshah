import React from "react";
import Utama from "./utama";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./server.css";

class Server extends React.Component {
    render(){
        return(
            <div>
                <nav className="navbar">
                    <Link to="/" className="nav-item">Beranda</Link>
                    <Link to="/galeri" className="nav-item">Galeri</Link>
                    <Link to="/haribesar" className="nav-item">Hari Besar</Link>
                </nav>
                <p><Utama /></p>
            </div>
        )
    }
}
 export default Server;