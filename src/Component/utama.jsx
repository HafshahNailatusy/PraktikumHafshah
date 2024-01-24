import React from "react";
import {Route, Routes} from "react-router-dom";

import Beranda from "./beranda";
import Galeri from "./galeri";
import Haribesar from "./haribesar";


const Utama = () => (
    <Routes>
        <Route exact path="/" element={<Beranda/>}/>
        <Route path="/galeri" element={<Galeri/>}/>
        <Route path="/haribesar" element={<Haribesar/>}/>
    </Routes>
)

export default Utama;