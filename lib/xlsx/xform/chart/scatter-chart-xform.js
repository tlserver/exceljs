const BaseXform = require('../base-xform');
const StaticXform = require('../static-xform');

const SerXform = require('./scatter-chart/ser-xform');

const dLblsJSON = require('./d-lbls');

class ScatterChartXform extends BaseXform {
  constructor() {
    super();

    this.map = {
      'c:ser': new SerXform(),
      'c:dLbls': new StaticXform(dLblsJSON),
    };
  }

  get tag() {
    return 'c:scatterChart';
  }

  prepare(model, options) {
    model.xAxis.type = 'valAx';
    model.yAxis.type = 'valAx';
    model.xAxis.position = model.xAxis.position || 'b';
    model.yAxis.position = model.yAxis.position || 'l';
  }

  render(xmlStream, model) {
    xmlStream.openNode(this.tag);

    xmlStream.leafNode('c:scatterStyle', {val: 'lineMarker'});
    xmlStream.leafNode('c:varyColors', {val: '0'});
    model.series.forEach(s => {
      this.map['c:ser'].prepare(s);
      this.map['c:ser'].render(xmlStream, s);
    });
    this.map['c:dLbls'].render(xmlStream, model);
    xmlStream.leafNode('c:axId', {val: model.xAxis.id});
    xmlStream.leafNode('c:axId', {val: model.yAxis.id});

    xmlStream.closeNode();
  }

  parseOpen(node) {}

  parseText(text) {}

  parseClose(name) {}

  reconcile(model, options) {}
}

module.exports = ScatterChartXform;
