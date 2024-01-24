import React, { useState } from 'react';
import './Cicilan.css';

function App() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateMonthlyPayment = () => {
    if (!loanAmount || !interestRate || !loanTerm) {
      alert('Mohon isi semua field dengan benar.');
      return;
    }

    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const term = parseInt(loanTerm);

    const monthlyPayment =
      (principal * rate) / (1 - Math.pow(1 + rate, -term));
    
    setMonthlyPayment(monthlyPayment.toFixed(2));
  };

  return (
    <div className="App">
      <h1>Cicilan Bank</h1>
      <div className="input-container">
        <label>
          Jumlah Pinjaman:
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
        </label>
        <label>
          Bunga (% per tahun):
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </label>
        <label>
          Periode (bulan):
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
          />
        </label>
      </div>
      <button onClick={calculateMonthlyPayment}>Hitung Cicilan Bulanan</button>
      {monthlyPayment !== null && (
        <div className="result-container">
          <h2>Hasil:</h2>
          <p>Cicilan Bulanan Anda adalah: Rp{monthlyPayment}</p>
        </div>
      )}
    </div>
  );
}

export default App;
