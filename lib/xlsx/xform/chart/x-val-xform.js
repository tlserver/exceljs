const BaseXform = require('../base-xform');

class XValXform extends BaseXform {
  get tag() {
    return 'c:xVal';
  }

  render(xmlStream, model) {
    xmlStream.openNode(this.tag);

    xmlStream.openNode(`c:${model.type}`);
    xmlStream.openNode('c:f');
    xmlStream.writeXml(model.value);
    xmlStream.closeNode();
    xmlStream.closeNode();

    xmlStream.closeNode();
  }

  parseOpen(node) {}

  parseText(text) {}

  parseClose(name) {}

  reconcile(model, options) {}
}

module.exports = XValXform;
