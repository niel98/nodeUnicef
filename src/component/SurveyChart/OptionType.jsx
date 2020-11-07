import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import res from './response';
import { useEffect } from 'react';

export const OptionType = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    //test

    // answer texts
    let answerText = [];

    const resObj = res;

    resObj.questionanswers.map((item) => {
      answerText.push(item.question_answer_text);
    });

    /**Get the number of occurences for each different answer */
    var occurrences = answerText.reduce(function (obj, i) {
      obj[i] = (obj[i] || 0) + 1;
      return obj;
    }, {});
    console.log('Occurences:', occurrences);

    const allOccurenceKeys = Object.keys(occurrences);
    console.log('All occurence keys ', allOccurenceKeys);

    var countsArray = [];

    allOccurenceKeys.forEach((element) => {
      console.log('Element ->', element.toString());
      var numberOfTimes = occurrences[element];
      countsArray.push(numberOfTimes);
    });

    // console.log('Counts Array', countsArray);

    // console.log('answer response:', answers[0][0].question_answer_text);
    console.log('answerTypeArray:', answerText);
    // console.log(resObj.data[0].questionanswers);

    setChartData({
      labels: allOccurenceKeys,
      datasets: [
        {
          label: 'Response option type',
          data: countsArray,
          backgroundColor: [
            'rgba(75, 192, 192, 0.6)',
            'rgba(255, 0, 0, 0.6)',
            // 'rgba(0, 255, 0, 0.6)',
            // 'rgba(0, 0, 255, 0.6)',
          ],
          borderColor: 'rgba(0,0,0,1)',
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
      <h2>Option type Survey</h2>
      <Bar
        data={chartData}
        width={100}
        height={50}
        options={{
          title: {
            display: true,
            text: 'Option type Responses',
            fontSize: 20,
          },
          legend: {
            display: true,
            position: 'right',
          },
          maintainAspectRatio: false,
        }}
      />
      <Pie
        data={chartData}
        options={{
          responsive: true,
          legend: {
            position: 'bottom',
          },
          title: {
            position: 'top',
            text: 'option type responses',
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
  );
};

export default OptionType;
