const BaseXform = require('../base-xform');

class StrRefXform extends BaseXform {
  get tag() {
    return 'c:strRef';
  }

  prepare(model, options) {}

  render(xmlStream, model) {
    xmlStream.openNode(this.tag);

    xmlStream.openNode('c:f');
    xmlStream.writeXml(model);
    xmlStream.closeNode();

    xmlStream.closeNode();
  }

  parseOpen(node) {}

  parseText(text) {}

  parseClose(name) {}

  reconcile(model, options) {}
}

module.exports = StrRefXform;
