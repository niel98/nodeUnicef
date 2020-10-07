import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pie from 'react-chartjs-2';

export const StockAboveOneyrPerProg = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let stockNutri21 = [];
    let stockWash22 = [];
    let stockEdu23 = [];
    // let yr99 = [];

    const fetchData = () => {
      const urls = [
        'https://api-unicef.herokuapp.com/api/v1/zcoinv/search/?validToDate=2021&pcrDescription=03 NUTRITION',
        'https://api-unicef.herokuapp.com/api/v1/zcoinv/search/?validToDate=2022&pcrDescription=02 WASH',
        'https://api-unicef.herokuapp.com/api/v1/zcoinv/search/?validToDate=2023&pcrDescription=05 BASIC EDUCATION',
        // 'https://api-unicef.herokuapp.com/api/v1/zcoinv/search/?validToDate=9999',
      ];

      const allRequests = urls.map((url) => axios.get(url).then((res) => res));
      return Promise.all(allRequests);
    };

    fetchData().then((arrRes) => {
      for (const item of arrRes[0].data.data) {
        stockNutri21.push(item.stock);
      }
      for (const item of arrRes[1].data.data) {
        stockWash22.push(item.stock);
      }
      for (const item of arrRes[2].data.data) {
        stockEdu23.push(item.stock);
      }

      const sum21 = stockNutri21.reduce((a, b) => a + b, 0);
      // console.log('sum21', sum21);
      const sum22 = stockWash22.reduce((a, b) => a + b, 0);
      // console.log('sum22', sum22);
      const sum23 = stockEdu23.reduce((a, b) => a + b, 0);
      // console.log('sum23', sum23);

      setChartData({
        labels: ['Nutrition', 'Wash', 'Education'],
        datasets: [
          {
            label: 'Stocks Above one year per Program',
            data: [sum21, sum22, sum23],
            backgroundColor: [
              'rgba(75, 192, 192, 0.6)',
              'rgba(255, 0, 0, 0.6)',
              'rgba(0, 255, 0, 0.6)',
              // 'rgba(0, 0, 255, 0.6)',
              // 'rgba(204,51,102,0.2)',
              // 'rgba(255,255,0,0.2)',
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
              text: 'Stock Above One year Per Program',
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

export default StockAboveOneyrPerProg;
