const BaseXform = require('../base-xform');

const BodyPrXform = require('./body-pr-xform');
const PXform = require('./p-xform');

class RichXform extends BaseXform {
  constructor() {
    super();

    this.map = {
      'a:bodyPr': new BodyPrXform(),
      'a:p': new PXform(),
    };
  }

  get tag() {
    return 'c:rich';
  }

  render(xmlStream, model) {
    xmlStream.openNode(this.tag);

    this.map['a:bodyPr'].render(xmlStream, model.direction);
    xmlStream.leafNode('a:lstStyle');
    this.map['a:p'].render(xmlStream, model.texts);

    xmlStream.closeNode();
  }

  parseOpen(node) {}

  parseText(text) {}

  parseClose(name) {}

  reconcile(model, options) {}
}

module.exports = RichXform;
