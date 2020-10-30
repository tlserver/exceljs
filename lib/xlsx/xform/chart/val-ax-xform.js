const BaseXform = require('../base-xform');
const StaticXform = require('../static-xform');

const ScalingXform = require('./scaling-xform');
const TitleXform = require('./title-xform');

const majorGridlinesJSON = require('./major-gridlines');
const minorGridlinesJSON = require('./minor-gridlines');
const spPrJSON = require('./val-ax/sp-pr');
const txPrJSON = require('./val-ax/tx-pr');

class ValAxXform extends BaseXform {
  constructor() {
    super();

    this.map = {
      'c:scaling': new ScalingXform(),
      'c:majorGridlines': new StaticXform(majorGridlinesJSON),
      'c:minorGridlines': new StaticXform(minorGridlinesJSON),
      'c:title': new TitleXform(),
      'c:spPr': new StaticXform(spPrJSON),
      'c:txPr': new StaticXform(txPrJSON),
    };
  }

  get tag() {
    return 'c:valAx';
  }

  prepare(model, options) {}

  render(xmlStream, model) {
    xmlStream.openNode(this.tag);

    xmlStream.leafNode('c:axId', {val: model.id});
    this.map['c:scaling'].render(xmlStream, model.scaling);
    xmlStream.leafNode('c:delete', {val: '0'});
    xmlStream.leafNode('c:axPos', {val: model.position});
    this.map['c:majorGridlines'].render(xmlStream, model);
    this.map['c:minorGridlines'].render(xmlStream, model);
    this.map['c:title'].render(xmlStream, model.title);
    xmlStream.leafNode('c:numFmt', {formatCode: model.formatCode, sourceLinked: '1'});
    xmlStream.leafNode('c:majorTickMark', {val: 'out'});
    xmlStream.leafNode('c:minorTickMark', {val: 'none'});
    xmlStream.leafNode('c:tickLblPos', {val: 'low'});
    this.map['c:spPr'].render(xmlStream, model);
    this.map['c:txPr'].render(xmlStream, model);
    xmlStream.leafNode('c:crossAx', {val: model.crossAxis});
    xmlStream.leafNode('c:crosses', {val: 'autoZero'});
    xmlStream.leafNode('c:crossBetween', {val: 'midCat'});

    xmlStream.closeNode();
  }

  parseOpen(node) {}

  parseText(text) {}

  parseClose(name) {}

  reconcile(model, options) {}
}

module.exports = ValAxXform;
