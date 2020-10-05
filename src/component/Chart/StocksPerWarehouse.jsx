import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pie from 'react-chartjs-2';

export const StockPerWarehouse = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let stock569 = [];
    let stock541 = [];
    let stock627 = [];
    let stock420 = [];
    let stock538 = [];
    let stock527 = [];

    const fetchData = () => {
      const urls = [
        'https://api-unicef.herokuapp.com/api/v1/zcoinv/search/?warehouseNumber=569',
        'https://api-unicef.herokuapp.com/api/v1/zcoinv/search/?warehouseNumber=541',
        'https://api-unicef.herokuapp.com/api/v1/zcoinv/search/?warehouseNumber=627',
        'https://api-unicef.herokuapp.com/api/v1/zcoinv/search/?warehouseNumber=420',
        'https://api-unicef.herokuapp.com/api/v1/zcoinv/search/?warehouseNumber=538',
        'https://api-unicef.herokuapp.com/api/v1/zcoinv/search/?warehouseNumber=527',
      ];

      const allRequests = urls.map((url) => axios.get(url).then((res) => res));
      return Promise.all(allRequests);
    };

    fetchData().then((arrRes) => {
      for (const item of arrRes[0].data.data) {
        stock569.push(item.stock);
      }
      for (const item of arrRes[1].data.data) {
        stock541.push(item.stock);
      }
      for (const item of arrRes[2].data.data) {
        stock627.push(item.stock);
      }
      for (const item of arrRes[3].data.data) {
        stock420.push(item.stock);
      }
      for (const item of arrRes[4].data.data) {
        stock538.push(item.stock);
      }
      for (const item of arrRes[5].data.data) {
        stock527.push(item.stock);
      }

      const sum569 = stock569.reduce((a, b) => a + b, 0);
      const sum541 = stock541.reduce((a, b) => a + b, 0);
      const sum627 = stock627.reduce((a, b) => a + b, 0);
      const sum420 = stock420.reduce((a, b) => a + b, 0);
      const sum538 = stock538.reduce((a, b) => a + b, 0);
      const sum527 = stock527.reduce((a, b) => a + b, 0);

      setChartData({
        labels: [
          'Jos NASCO',
          'Maiduguri2-New',
          'Bauchi WH Galadima',
          'Bauchi W1',
          'Maiduguri WH',
          'Bollore WH Abuja',
        ],
        datasets: [
          {
            label: 'Total Number of Stocks per Program',
            data: [sum541, sum569, sum627, sum420, sum538, sum527],
            backgroundColor: [
              'rgba(75, 192, 192, 0.6)',
              'rgba(255, 0, 0, 0.6)',
              'rgba(0, 255, 0, 0.6)',
              'rgba(0, 0, 255, 0.6)',
              'rgba(204,51,102,0.2)',
              'rgba(255,255,0,0.2)',
            ],
            borderwidth: 4,
          },
        ],
      });
    });
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div>
      <div>
        <Pie
          data={chartData}
          options={{
            responsive: true,
            legend: {
              position: 'bottom',
            },
            title: {
              position: 'top',
              text: 'Stock Per Warehouse',
              display: true,
            },
            plugins: {
              datalabels: {
                color: '#fff',
                anchor: 'end',
                align: 'start',
                offset: -10,
                borderwidth: 2,
                borderColor: '#fff',
                borderRadius: 25,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default StockPerWarehouse;
