const BaseXform = require('../base-xform');

class OverlayXform extends BaseXform {
  get tag() {
    return 'c:overlay';
  }

  render(xmlStream, model) {
    xmlStream.leafNode(this.tag, {
      val: model.overlay ? 1 : 0,
    });
  }

  parseOpen(node) {
    if (node.name === this.tag) {
      this.model = {
        overlay: node.attributes.overlay === '1',
      };
      return true;
    }
    return false;
  }

  parseText() {}

  parseClose() {
    return false;
  }
}

module.exports = OverlayXform;
