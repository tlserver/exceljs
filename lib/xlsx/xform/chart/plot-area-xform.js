const BaseXform = require('../base-xform');
const StaticXform = require('../static-xform');

const LineChartXform = require('./line-chart-xform');
const ScatterChartXform = require('./scatter-chart-xform');
const DateAxform = require('./date-ax-xform');
const ValAxXform = require('./val-ax-xform');

const spPrJSON = require('./plot-area/sp-pr');

class PlotAreaXform extends BaseXform {
  constructor() {
    super();

    this.map = {
      'c:lineChart': new LineChartXform(),
      'c:scatterChart': new ScatterChartXform(),
      'c:dateAx': new DateAxform(),
      'c:valAx': new ValAxXform(),
      'c:spPr': new StaticXform(spPrJSON),
    };
  }

  get tag() {
    return 'c:plotArea';
  }

  prepare(model, options) {
    model.xAxis = model.xAxis || {};
    model.yAxis = model.yAxis || {};
    model.xAxis.id = model.xAxis.id || '387234111';
    model.yAxis.id = model.yAxis.id || '501298991';
    model.xAxis.crossAxis = model.yAxis.id;
    model.yAxis.crossAxis = model.xAxis.id;
    model.series.forEach((s, index) => {
      s.id = index;
      s.color = s.color || `accent${model.series.length > 5 ? Math.floor(index / 5) + 1 : index + 1}`;
      s.marker = s.marker || {
        symbol: PlotAreaXform.MarkerSymbol[index % 5],
        size: 8,
      };
    });
    this.map[`c:${model.type}`].prepare(model);
  }

  render(xmlStream, model) {
    xmlStream.openNode(this.tag);

    xmlStream.leafNode('c:layout');
    this.map[`c:${model.type}`].render(xmlStream, model);
    this.map[`c:${model.xAxis.type}`].render(xmlStream, model.xAxis);
    this.map[`c:${model.yAxis.type}`].render(xmlStream, model.yAxis);
    this.map['c:spPr'].render(xmlStream, model);

    xmlStream.closeNode();
  }

  parseOpen(node) {}

  parseText(text) {}

  parseClose(name) {}

  reconcile(model, options) {}
}

PlotAreaXform.MarkerSymbol = ['circle', 'triangle', 'square', 'diamond', 'dash'];

module.exports = PlotAreaXform;
