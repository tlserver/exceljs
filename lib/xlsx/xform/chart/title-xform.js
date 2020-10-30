const BaseXform = require('../base-xform');
const StaticXform = require('../static-xform');

const TxXform = require('./tx-xform');
const OverlayXform = require('./overlay-xform');
const spPrJSON = require('./title/sp-pr');
const txPrJSON = require('./title/tx-pr');

class TitleXform extends BaseXform {
  constructor() {
    super();

    this.map = {
      'c:tx': new TxXform(),
      'c:overlay': new OverlayXform(),
      'c:spPr': new StaticXform(spPrJSON),
      'c:txPr': new StaticXform(txPrJSON),
    };
  }

  get tag() {
    return 'c:title';
  }

  render(xmlStream, model) {
    if (model === undefined) return;
    xmlStream.openNode(this.tag);

    this.map['c:tx'].prepare(model);
    this.map['c:tx'].render(xmlStream, model);
    this.map['c:overlay'].render(xmlStream, model);
    this.map['c:spPr'].render(xmlStream, model);
    this.map['c:txPr'].render(xmlStream, model);

    xmlStream.closeNode();
  }

  parseOpen(node) {}

  parseText(text) {}

  parseClose(name) {}

  reconcile(model, options) {}
}

module.exports = TitleXform;
