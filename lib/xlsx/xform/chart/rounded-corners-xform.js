const BaseXform = require('../base-xform');

class RoundedCornersXform extends BaseXform {
  get tag() {
    return 'c:roundedCorners';
  }

  render(xmlStream, model) {
    xmlStream.leafNode(this.tag, {
      val: model.roundedCorners || 0,
    });
  }

  parseOpen(node) {
    if (node.name === this.tag) {
      this.model = {
        roundedCorners: node.attributes.roundedCorners,
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

module.exports = RoundedCornersXform;
