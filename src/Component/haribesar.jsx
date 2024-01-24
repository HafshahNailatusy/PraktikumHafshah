import React from "react";
import "./server.css";

class Haribesar extends React.Component {
    render() {
        const environmentalDays = [
            { name: 'Hari Bumi', date: '22 April' },
            { name: 'Hari Air Sedunia', date: '22 Maret' },
            { name: 'Hari Hutan Sedunia', date: '21 Maret' },
            { name: 'Hari Perlindungan Ozon Sedunia', date: '16 September' },
            { name: 'Hari Lingkungan Hidup Sedunia', date: '5 Juni' },
            // Tambahkan hari besar lainnya sesuai kebutuhan
        ];
        return(
            <div>
                <h2>Daftar Hari Besar Lingkungan Hidup</h2>
                <ul>
                    {environmentalDays.map((day, index) => (
                        <li key={index}>
                            <strong>{day.name}</strong>: {day.date}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Haribesar;