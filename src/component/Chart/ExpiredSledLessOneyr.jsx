import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pie from 'react-chartjs-2';

export const ExpiredSledLessOneyr = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let sled21Nutri = [];
    let sled20Wash = [];
    let sled21Edu = [];

    const fetchData = () => {
      const urls = [
        'https://api-unicef.herokuapp.com/api/v1/zcoinv/search/?validToDate=2021-01&pcrDescription=03 NUTRITION',
        'https://api-unicef.herokuapp.com/api/v1/zcoinv/search/?validToDate=2020-12&pcrDescription=02 WASH',
        'https://api-unicef.herokuapp.com/api/v1/zcoinv/search/?validToDate=2021-03&pcrDescription=05 BASIC EDUCATION',
      ];

      const allRequests = urls.map((url) => axios.get(url).then((res) => res));
      return Promise.all(allRequests);
    };

    fetchData()
      .then((arrRes) => {
        for (const item of arrRes[0].data.data) {
          sled21Nutri.push(item.vendorSledBbd);
        }
        for (const item of arrRes[1].data.data) {
          sled20Wash.push(item.vendorSledBbd);
        }
        for (const item of arrRes[2].data.data) {
          sled21Edu.push(item.vendorSledBbd);
        }

        console.log('total nutri sled', sled21Nutri);

        const sledNutriTot = sled21Nutri.length;
        const sledWashTot = sled20Wash.length;
        const sledEduTot = sled21Edu.length;

        var d = new Date();
        d.setMonth(d.getMonth() + 6);
        console.log('In six months: ', d.toLocaleDateString());

        setChartData({
          labels: ['Nutrition', 'Wash', 'Education'],
          datasets: [
            {
              label: 'Expired/Sled less than One year by Program',
              data: [sledNutriTot, sledWashTot, sledEduTot],
              backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 0, 0, 0.6)',
                'rgba(0, 255, 0, 0.6)',
                // 'rgba(0, 0, 255, 0.6)',
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
              text: 'Expired Sled less than One year by Program',
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

export default ExpiredSledLessOneyr;
