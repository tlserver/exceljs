const BaseXform = require('../base-xform');

const SpPrXform = require('./marker/sp-pr-xform');

class MarkerXform extends BaseXform {
  constructor() {
    super();

    this.map = {
      'c:spPr': new SpPrXform(),
    };
  }

  get tag() {
    return 'c:marker';
  }

  render(xmlStream, model) {
    xmlStream.openNode(this.tag);

    xmlStream.leafNode('c:symbol', {val: model.symbol});
    xmlStream.leafNode('c:size', {val: model.size});
    this.map['c:spPr'].render(xmlStream, model.color);

    xmlStream.closeNode();
  }

  parseOpen(node) {}

  parseText(text) {}

  parseClose(name) {}

  reconcile(model, options) {}
}

module.exports = MarkerXform;
