const BaseXform = require('../base-xform');
const StaticXform = require('../static-xform');

const SerXform = require('./line-chart/ser-xform');

const dLblsJSON = require('./d-lbls');

class LineChartXform extends BaseXform {
  constructor() {
    super();

    this.map = {
      'c:ser': new SerXform(),
      'c:dLbls': new StaticXform(dLblsJSON),
    };
  }

  get tag() {
    return 'c:lineChart';
  }

  prepare(model, options) {
    model.xAxis.type = 'dateAx';
    model.yAxis.type = 'valAx';
    model.xAxis.position = model.xAxis.position || 't';
    model.yAxis.position = model.yAxis.position || 'l';
    model.series.forEach((s, index) => {
      s.id = index;
      s.color = s.color || `accent${index + 1}`;
    });
  }

  render(xmlStream, model) {
    xmlStream.openNode(this.tag);

    xmlStream.leafNode('c:grouping', {val: 'standard'});
    xmlStream.leafNode('c:varyColors', {val: '0'});
    model.series.forEach(s => {
      this.map['c:ser'].prepare(s);
      this.map['c:ser'].render(xmlStream, s);
    });
    this.map['c:dLbls'].render(xmlStream, model);
    xmlStream.leafNode('c:marker', {val: '1'});
    xmlStream.leafNode('c:smooth', {val: '0'});
    xmlStream.leafNode('c:axId', {val: model.xAxis.id});
    xmlStream.leafNode('c:axId', {val: model.yAxis.id});

    xmlStream.closeNode();
  }

  parseOpen(node) {}

  parseText(text) {}

  parseClose(name) {}

  reconcile(model, options) {}
}

module.exports = LineChartXform;
