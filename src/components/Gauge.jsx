// Step 1 - Including react
import React from 'react';
import ReactDOM from 'react-dom';

// Step 2 - Including the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Step 3 - Including the fusioncharts library
import FusionCharts from 'fusioncharts';

// Step 4 - Including the chart type
import Widgets from 'fusioncharts/fusioncharts.widgets';

// Step 5 - Including the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);

// Step 7 - Creating the JSON object to store the chart configurations
const chartConfigs = {
    type: 'angulargauge', // The gauge type
    width: '500', // Width of the gauge
    height: '400', // Height of the gauge
    dataFormat: 'json', // Data type
    dataSource: {
    // Chart Configuration
      "chart": {
          "caption": "Current Amount Spent",
          "lowerLimit": "0",
          "upperLimit": "100",
          "showValue": "1",
          "numberPrefix": "$",
          "theme": "fusion",
          "showToolTip": "0"
      },
      // Chart Data
      "colorRange": {
          "color": [{
              "minValue": "0",
              "maxValue": "50",
              "code": "#62B58F"

          }, {
              "minValue": "50",
              "maxValue": "75",
              "code": "#FFC533"
          }, {
              "minValue": "75",
              "maxValue": "100",
              "code": "#F2726F"
          }]
      },
      "dials": {
          "dial": [{
              "value": "81"
          }]
      }
  }
};

// Step 9 - Creating the DOM element to pass the react-fusioncharts component
class Gauge extends React.Component {
  render() {
     return (
     <ReactFC
        {...chartConfigs}/>
     );
  }
}

export default Gauge