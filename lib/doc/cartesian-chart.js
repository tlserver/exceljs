class ScatterChart {
  constructor(model) {
    this.model = model;
  }

  get model() {
    return {
      type: this.type,
      title: this.title,
      series: this.series,
      xAxis: this.xAxis,
      yAxis: this.yAxis,
    };
  }

  set model({type, title, series, xAxis, yAxis}) {
    this.type = type || 'scatterChart';
    this.title = title;
    this.series = series;
    this.xAxis = xAxis;
    this.yAxis = yAxis;
  }
}

module.exports = ScatterChart;
