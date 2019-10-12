import React from 'react';
import ReactDOM from 'react-dom';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const chartConfigs = {
    type: 'doughnut2D',// The chart type
    width: '700', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
      chart: {
        caption: "Expenses",
        // subcaption: "For all expenses inputted",
        showpercentvalues: "1",
        // defaultcenterlabel: "Total Amount: $$value",
        aligncaptionwithcanvas: "0",
        captionpadding: "0",
        decimals: "1",
        plottooltext:
          "<b>$percentValue</b> of money spent on <b>$label</b>",
        centerlabel: "$$value",
        theme: "fusion"
      },
      data: [
        {
          label: "Bills",
          value: "1000"
        },
        {
          label: "Entertainment",
          value: "5300"
        },
        {
          label: "Clothing",
          value: "10500"
        },
        {
          label: "Food",
          value: "18900"
        },
        {
          label: "Etc",
          value: "17904"
        }
      ]
    }
};

// Step 9 - Creating the DOM element to pass the react-fusioncharts component
class Doughnut extends React.Component {
  render() {
     return (
     <ReactFC
        {...chartConfigs}
      />
     );
  }
}

export default Doughnut
