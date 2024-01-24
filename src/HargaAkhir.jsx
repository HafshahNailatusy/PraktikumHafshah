import React, { useState } from 'react';
import "./HargaAkhir.css"

const HargaAkhir = () => {
  const [hargaAwal, setHargaAwal] = useState(" ");
  const [ppn, setPpn] = useState("");
  const [diskon, setDiskon] = useState("");

  const hitungHargaAkhir = () => {
    const hargaAkhir = hargaAwal-(hargaAwal * diskon);
    const hargaHarus = hargaAkhir-(hargaAkhir*ppn);
    return hargaHarus.toFixed(0);
  };

  return (
    <div className="harga-akhir">
      <h2>Hitung Harga Akhir</h2>
      <form>
        <label>
          Harga Awal:
          <input type="number" value={hargaAwal} onChange={e => setHargaAwal(e.target.value)} />
        </label>
        <label>
          PPN (%):
          <input type="number" value={ppn} onChange={e => setPpn(e.target.value)} />
        </label>
        <label>
          Diskon (%):
          <input type="number" value={diskon} onChange={e => setDiskon(e.target.value)} />
        </label>
        <button type="button" onClick={hitungHargaAkhir}>Hitung</button>
      </form>
      <h3>Harga Akhir: Rp. {hitungHargaAkhir()}</h3>
    </div>
  );
};

export default HargaAkhir;