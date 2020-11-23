import React, { useState, useEffect } from 'react';
import axios from 'axios';
import response from './zcoin';
import Pie from 'react-chartjs-2';

export const GrantsExLessThreeMonths = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    const res = response;
    let grants = res.data.map((item) => item.grant);
    const grantSet = new Set(grants);
    let grArray = Array.from(grantSet);
    console.log('Grants Array: ', grArray);

    var occurrences = grants.reduce(function (obj, i) {
      obj[i] = (obj[i] || 0) + 1;
      return obj;
    }, {});
    console.log('Occurences:', occurrences);

    let allOcurrence = Object.keys(occurrences);
    let countsArray = [];
    console.log('Mystery array: ', countsArray);

    allOcurrence.forEach((element) => {
      var numTimes = occurrences[element];
      countsArray.push(numTimes);
    });

    setChartData({
      // labels: ['Nutrition', 'Wash'],
      // datasets: [
      //   {
      //     label: 'Expired Grants less than 3 months by Program',
      //     data: [grant21tot, grant20tot],
      //     backgroundColor: [
      //       'rgba(75, 192, 192, 0.6)',
      //       'rgba(255, 0, 0, 0.6)',
      //       // 'rgba(0, 255, 0, 0.6)',
      //       // 'rgba(0, 0, 255, 0.6)',
      //     ],
      //     borderwidth: 4,
      //   },
      // ],
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
              text: 'Expired Grants less than Three months by Program',
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

export default GrantsExLessThreeMonths;
