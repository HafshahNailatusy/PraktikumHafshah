import React from "react";
import skula2 from "../image/skula2.png";
import skulaadiwiyata from "../image/skulaadiwiyata.png";
import "./server.css";

class Galeri extends React.Component {
  render() {
    return (
      <div className="galeri-container">
        <h2>Ini Galeri</h2>
        <img src={skula2} alt="" />
        <p>
          Sekolah Adiwiyata adalah sekolah yang menerapkan hidup peduli lingkungan.
          Sekolah Adiwiyata bertujuan menyadarkan warga sekolah akan lingkungan
          sehingga dapat turut bertanggung jawab dalam penyelamatan lingkungan.
        </p>
        <img src={skulaadiwiyata} alt= ""></img>
        <p>
          Sekolah Adiwiyata memupuk Karakter Peduli Lingkungan pada Anak.
        </p>
      </div>
    );
  }
}

export default Galeri;