import React, { useState } from "react";
import "./Konversi.css";

function App() {
  const [bilangan, setBilangan] = useState("");
  const [hasil, setHasil] = useState("");
  const [tipe, setTipe] = useState("decimal");

  const konversi = (e) => {
    e.preventDefault();
    let hasilKonversi = "";
    let bilanganBaru = parseInt(bilangan, 10);

    if (tipe === "decimal") {
      hasilKonversi = parseInt(bilanganBaru, 2).toString(10);
    } else if (tipe === "biner") {
      hasilKonversi = bilanganBaru.toString(2);
    } else if (tipe === "oktal") {
      hasilKonversi = parseInt(bilanganBaru, 8).toString(10);
    } else if (tipe === "heksadesimal") {
      hasilKonversi = parseInt(bilanganBaru, 2).toString(16);
    }

    setHasil(hasilKonversi);
  };

  return (
    <div className="container">
      <h1>Konversi Bilangan</h1>
      <form onSubmit={konversi}>
        <input
          type="text"
          value={bilangan}
          onChange={(e) => setBilangan(e.target.value)}
          placeholder="Masukkan bilangan"
        />
        <select value={tipe} onChange={(e) => setTipe(e.target.value)}>
          <option value="decimal">Decimal</option>
          <option value="biner">Biner</option>
          <option value="oktal">Oktal</option>
          <option value="heksadesimal">Heksadesimal</option>
        </select>
        <button type="submit">Konversi</button>
      </form>
      {hasil && (
        <p>
          Hasil: <strong>{hasil}</strong>
        </p>
      )}
    </div>
  );
}

export default App;