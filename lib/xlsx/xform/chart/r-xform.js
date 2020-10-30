const BaseXform = require('../base-xform');

const RPrXform = require('./r-pr-xform');

class RXform extends BaseXform {
  constructor() {
    super();

    this.map = {
      'a:rPr': new RPrXform(),
    };
  }

  get tag() {
    return 'a:r';
  }

  prepare(model, options) {
    model.font = model.font || {};
  }

  render(xmlStream, model) {
    xmlStream.openNode(this.tag);

    this.map['a:rPr'].render(xmlStream, model.font);
    xmlStream.openNode('a:t');
    xmlStream.writeText(model.text);
    xmlStream.closeNode();

    xmlStream.closeNode();
  }

  parseOpen(node) {}

  parseText(text) {}

  parseClose(name) {}
}

module.exports = RXform;
