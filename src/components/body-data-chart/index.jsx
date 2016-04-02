import          './index.scss';
import React    from 'react';
import ReactDOM from 'react-dom';
import Chart    from 'chart.js';

const marshalChartData = (data) => {
  const jsData = data.toJS();
  const labels = jsData.map((record) => new Date(record.createdAt).toString().slice(0, 10));
  const pointData = jsData.map((record) => record.weight);
  return {
    labels,
    datasets: [{
      label: "Weight",
      fillColor: "rgba(151,187,205,0.2)",
      strokeColor: "rgba(151,187,205,1)",
      pointColor: "rgba(151,187,205,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(151,187,205,1)",
      data: pointData
    }]
  }
};

class BodyDataChart extends React.Component {
  constructor(props) {
    super(props);
  }

  renderChart() {
    const ctx = this.refs.lineChart.getContext("2d");
    const data = marshalChartData(this.props.data);
    var myNewChart = new Chart(ctx).Line(data)
  }

  componentDidMount() {
    this.renderChart();
  }

  componentDidUpdate() {
    this.renderChart();
  }

  render() {
    return <div className="chart-wrapper">
      <canvas
        ref="lineChart"
        id="line-chart"
        className="chart"
      />
    </div>
  }
}

export default BodyDataChart;
