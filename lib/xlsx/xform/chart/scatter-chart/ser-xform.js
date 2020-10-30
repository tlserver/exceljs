const BaseXform = require('../../base-xform');

const TxXform = require('../tx-xform');
const SpPrXform = require('./ser/sp-pr-xform');
const MarkerXform = require('../marker-xform');
const XValXform = require('../x-val-xform');
const YValXform = require('../y-val-xform');
const ExtLstXform = require('./ser/ext-lst-xform');

class SerXform extends BaseXform {
  constructor() {
    super();

    this.map = {
      'c:tx': new TxXform(),
      'c:spPr': new SpPrXform(),
      'c:marker': new MarkerXform(),
      'c:xVal': new XValXform(),
      'c:yVal': new YValXform(),
      'c:extLst': new ExtLstXform(),
    };
  }

  get tag() {
    return 'c:ser';
  }

  prepare(model, options) {
    model.marker.color = model.marker.color || model.color;
    this.map['c:tx'].prepare(model, options);
  }

  render(xmlStream, model) {
    xmlStream.openNode(this.tag);

    xmlStream.leafNode('c:idx', {val: model.id});
    xmlStream.leafNode('c:order', {val: model.id});
    this.map['c:tx'].render(xmlStream, model.name);
    this.map['c:spPr'].render(xmlStream, model.color);
    this.map['c:marker'].render(xmlStream, model.marker);
    this.map['c:xVal'].render(xmlStream, model.xValues);
    this.map['c:yVal'].render(xmlStream, model.yValues);
    xmlStream.leafNode('c:smooth', {val: '0'});
    this.map['c:extLst'].render(xmlStream, model.id);

    xmlStream.closeNode();
  }

  parseOpen(node) {}

  parseText(text) {}

  parseClose(name) {}

  reconcile(model, options) {}
}

module.exports = SerXform;
