const BaseXform = require('../base-xform');

class ScalingXform extends BaseXform {
  get tag() {
    return 'c:scaling';
  }

  render(xmlStream, model) {
    xmlStream.openNode(this.tag);

    xmlStream.leafNode('c:orientation', {val: 'minMax'});

    xmlStream.closeNode();
  }

  parseOpen(node) {}

  parseText(text) {}

  parseClose(name) {}

  reconcile(model, options) {}
}

module.exports = ScalingXform;
