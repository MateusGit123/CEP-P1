import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const cores = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088FE', '#FFBB28'];

function GraficoUF({ localidades }) {
  const contagemUF = localidades.reduce((mapa, loc) => {
    const uf = loc.uf;
    if (uf) {
      mapa[uf] = (mapa[uf] || 0) + 1;
    }
    return mapa;
  }, {});

  const dadosGrafico = Object.entries(contagemUF).map(([uf, total]) => ({
    name: uf,
    value: total,
  }));

  if (dadosGrafico.length === 0) return null;

  return (
    <div style={{ width: '100%', height: 300 }}>
      <h2>Distribuição por Estado (UF)</h2>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={dadosGrafico}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {dadosGrafico.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={cores[index % cores.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GraficoUF;
