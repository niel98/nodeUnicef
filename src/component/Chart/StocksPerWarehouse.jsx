import React, { useState, useEffect } from 'react';
import axios from 'axios';
import response from './zcoin';
import Pie from 'react-chartjs-2';

export const StockPerWarehouse = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    const res = response;
    let wareHouse = res.data.map((item) => item.warehouseNumberDescription);
    let disWhouse = new Set(wareHouse);
    let arrWhouse = Array.from(disWhouse);

    let arr0 = [];
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    let arr4 = [];
    let arr5 = [];
    let arr6 = [];
    let arr7 = [];

    res.data.forEach((item) => {
      if (item.warehouseNumberDescription === arrWhouse[0]) {
        arr0.push(item.stock);
      }
    });
    res.data.forEach((item) => {
      if (item.warehouseNumberDescription === arrWhouse[1]) {
        arr1.push(item.stock);
      }
    });
    res.data.forEach((item) => {
      if (item.warehouseNumberDescription === arrWhouse[2]) {
        arr2.push(item.stock);
      }
    });
    res.data.forEach((item) => {
      if (item.warehouseNumberDescription === arrWhouse[3]) {
        arr3.push(item.stock);
      }
    });
    res.data.forEach((item) => {
      if (item.warehouseNumberDescription === arrWhouse[4]) {
        arr4.push(item.stock);
      }
    });
    res.data.forEach((item) => {
      if (item.warehouseNumberDescription === arrWhouse[5]) {
        arr5.push(item.stock);
      }
    });
    res.data.forEach((item) => {
      if (item.warehouseNumberDescription === arrWhouse[6]) {
        arr6.push(item.stock);
      }
    });
    res.data.forEach((item) => {
      if (item.warehouseNumberDescription === arrWhouse[7]) {
        arr7.push(item.stock);
      }
    });

    arr0 = arr0.reduce((a, b) => a + b, 0);
    arr1 = arr1.reduce((a, b) => a + b, 0);
    arr2 = arr2.reduce((a, b) => a + b, 0);
    arr3 = arr3.reduce((a, b) => a + b, 0);
    arr4 = arr4.reduce((a, b) => a + b, 0);
    arr5 = arr5.reduce((a, b) => a + b, 0);
    arr6 = arr6.reduce((a, b) => a + b, 0);
    arr7 = arr7.reduce((a, b) => a + b, 0);

    let finValArr = [arr0, arr1, arr2, arr3, arr4, arr5, arr6, arr7];

    setChartData({
      labels: arrWhouse,
      datasets: [
        {
          label: 'Total Number of Stocks per Program',
          data: finValArr,
          backgroundColor: [
            'rgba(75, 192, 192, 0.6)',
            'rgba(255, 0, 0, 0.6)',
            'rgba(0, 255, 0, 0.6)',
            'rgba(0, 0, 255, 0.6)',
            'rgba(255, 255, 0, 0.6)',
            'rgba(255, 51, 204, 0.6)',
            'rgba(153, 204, 255, 0.6)',
            'rgba(102, 51, 0, 0.6)',
          ],
          borderwidth: 4,
        },
      ],
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
