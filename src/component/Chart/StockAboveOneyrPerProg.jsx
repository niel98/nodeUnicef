import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pie from 'react-chartjs-2';

export const StockAboveOneyrPerProg = () => {
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
          vendorSled.push(item.vendorSled);
          pcrDescription.push(item.pcrDescription);
        }

        // console.log('des ', pcrDescription);
        //Get count of items
        var occurrences = validToDate.reduce(function (obj, i) {
          obj[i] = (obj[i] || 0) + 1;
          return obj;
        }, {});

        const yr21 = occurrences['2021'];
        const yr22 = occurrences['2022'];
        const yr23 = occurrences['2023'];
        const yr99 = occurrences['9999'];

        setChartData({
          labels: ['2021', '2022', '2023', '2024'],
          datasets: [
            {
              label: 'Stocks Above One year per Program',
              data: [yr21, yr22, yr23, yr99],
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

    // console.log(
    //   'grant',
    //   grant,
    //   'validTodDate',
    //   validToDate,
    //   'stock',
    //   stock,
    //   'stockValue',
    //   stockValue,
    //   'warehouseNum',
    //   warehouseNumber,
    //   'warehouseDesc',
    //   warehouseNumberDescription,
    //   'totalStock',
    //   totalStock,
    //   'currency',
    //   currency,
    //   'vendorSled',
    //   vendorSled,
    //   'pcrDesc',
    //   pcrDescription
    // );
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
              text: 'Stocks Above One year Per Program',
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
