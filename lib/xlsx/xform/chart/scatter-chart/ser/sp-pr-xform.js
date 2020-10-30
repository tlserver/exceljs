const BaseXform = require('../../../base-xform');

class SpPrXform extends BaseXform {
  get tag() {
    return 'c:spPr';
  }

  render(xmlStream, model) {
    xmlStream.openNode(this.tag);

    xmlStream.openNode('a:ln', {w: '28575', cap: 'rnd'});
    xmlStream.openNode('a:solidFill');
    xmlStream.leafNode('a:schemeClr', {val: model});
    xmlStream.closeNode();
    xmlStream.leafNode('a:round');
    xmlStream.closeNode();
    xmlStream.leafNode('a:effectLst');

    xmlStream.closeNode();
  }

  parseOpen(node) {}

  parseText(text) {}

  parseClose(name) {}

  reconcile(model, options) {}
}

module.exports = SpPrXform;
