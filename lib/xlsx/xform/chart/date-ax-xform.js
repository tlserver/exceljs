const BaseXform = require('../base-xform');
const StaticXform = require('../static-xform');

const ScalingXform = require('./scaling-xform');
const TitleXform = require('./title-xform');

const majorGridlinesJSON = require('./major-gridlines');
const minorGridlinesJSON = require('./minor-gridlines');
const spPrJSON = require('./date-ax/sp-pr');
const txPrJSON = require('./date-ax/tx-pr');

class DateAxXform extends BaseXform {
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
    return 'c:dateAx';
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
    xmlStream.leafNode('c:majorTickMark', {val: 'none'});
    xmlStream.leafNode('c:minorTickMark', {val: 'none'});
    xmlStream.leafNode('c:tickLblPos', {val: 'nextTo'});
    this.map['c:spPr'].render(xmlStream, model);
    this.map['c:txPr'].render(xmlStream, model);
    xmlStream.leafNode('c:crossAx', {val: model.crossAxis});
    xmlStream.leafNode('c:crosses', {val: 'max'});
    xmlStream.leafNode('c:auto', {val: '1'});
    xmlStream.leafNode('c:lblOffset', {val: '100'});
    xmlStream.leafNode('c:baseTimeUnit', {val: 'days'});

    xmlStream.closeNode();
  }

  parseOpen(node) {}

  parseText(text) {}

  parseClose(name) {}

  reconcile(model, options) {}
}

module.exports = DateAxXform;
