import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pie from 'react-chartjs-2';

export const TotalProdsPerProg = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let grant = [];
    let validToDate = [];
    let stock = [];
    let stockValue = [];
    let warehouseNumber = [];
    let warehouseNumberDescription = [];
    let totalStock = [];
    let currency = [];
    let vendorSled = [];
    let pcrDescription = [];

    const value = 568;

    axios
      .get('https://api-unicef.herokuapp.com/api/v1/zcoinv/list')
      .then((res) => {
        for (const item of res.data.data) {
          grant.push(item.grant);
          validToDate.push(parseInt(item.validToDate));
          stock.push(item.stock);
          stockValue.push(item.stockValue);
          warehouseNumber.push(item.warehouseNumber);
          warehouseNumberDescription.push(item.warehouseNumberDescription);
          totalStock.push(item.totalStock);
          currency.push(item.currency);
          vendorSled.push(parseInt(item.vendorSled));
          pcrDescription.push(item.pcrDescription);
        }

        console.log('des ', pcrDescription);
        //Get count of items
        var occurrences = pcrDescription.reduce(function (obj, i) {
          obj[i] = (obj[i] || 0) + 1;
          return obj;
        }, {});

        const nutritionCount = occurrences['03 NUTRITION'];
        const educationCount = occurrences['05 BASIC EDUCATION'];
        const washCount = occurrences['02 WASH'];
        const healthCount = occurrences['01 HEALTH'];

        setChartData({
          labels: ['Nutrition', 'Education', 'Wash', 'Health'],
          datasets: [
            {
              label: 'Total Number of Stocks per Program',
              data: [nutritionCount, educationCount, washCount, healthCount],
              backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 0, 0, 0.6)',
                'rgba(0, 255, 0, 0.6)',
                'rgba(0, 0, 255, 0.6)',
              ],
              borderwidth: 4,
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err.message);
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
              text: 'Total Number of Products Per Program',
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

export default TotalProdsPerProg;
