import React, { useState, useEffect } from 'react';
import axios from 'axios';
import response from './zcoin';
import 'chart.piecelabel.js';
import Pie from 'react-chartjs-2';

export const TotalProdsPerProg = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    const res = response;
    let programs = res.data.map((item) => item.pcrDescription);
    const progSet = new Set(programs);
    let array = Array.from(progSet);

    let arr0 = [];
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    let arr4 = [];
    let arr5 = [];
    let arr6 = [];

    res.data.forEach((item) => {
      if (item.pcrDescription === array[0]) {
        arr0.push(item.stockValue);
      }
    });
    res.data.forEach((item) => {
      if (item.pcrDescription === array[1]) {
        arr1.push(item.stockValue);
      }
    });
    res.data.forEach((item) => {
      if (item.pcrDescription === array[2]) {
        arr2.push(item.stockValue);
      }
    });
    res.data.forEach((item) => {
      if (item.pcrDescription === array[3]) {
        arr3.push(item.stockValue);
      }
    });
    res.data.forEach((item) => {
      if (item.pcrDescription === array[4]) {
        arr4.push(item.stockValue);
      }
    });
    res.data.forEach((item) => {
      if (item.pcrDescription === array[5]) {
        arr5.push(item.stockValue);
      }
    });
    res.data.forEach((item) => {
      if (item.pcrDescription === array[6]) {
        arr6.push(item.stockValue);
      }
    });

    arr0 = arr0.reduce((a, b) => a + b, 0);
    arr1 = arr1.reduce((a, b) => a + b, 0);
    arr2 = arr2.reduce((a, b) => a + b, 0);
    arr3 = arr3.reduce((a, b) => a + b, 0);
    arr4 = arr4.reduce((a, b) => a + b, 0);
    arr5 = arr5.reduce((a, b) => a + b, 0);
    arr6 = arr6.reduce((a, b) => a + b, 0);

    let finValArr = [arr0, arr1, arr2, arr3, arr4, arr5, arr6];

    // const obj = () => {
    //   res.data.forEach((item) => {
    //     let program = [];
    //     program.push(item.pcrDescription);

    //     let value = [];
    //     value.push(item.stockValue);

    //     program.forEach((key, i) => (valuesObj[key] = value[i]));
    //   });
    // };

    // obj();

    // /**Get the number of occurences for each different answer */
    // var progOccur = programs.reduce(function (obj, i) {
    //   obj[i] = (obj[i] || 0) + 1;
    //   return obj;
    // }, {});
    // console.log('Prog Occurences: ', progOccur);

    setChartData({
      labels: array,
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
              text: 'Total value Per Program',
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
            pieceLabel: {
              render: 'value',
            },
          }}
        />
      </div>
    </div>
  );
};
export default TotalProdsPerProg;
