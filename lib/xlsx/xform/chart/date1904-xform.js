const BaseXform = require('../base-xform');

class Date1904Xform extends BaseXform {
  get tag() {
    return 'c:date1904';
  }

  render(xmlStream, model) {
    xmlStream.leafNode(this.tag, {
      val: model.date1904 ? 1 : 0,
    });
  }

  parseOpen(node) {
    if (node.name === this.tag) {
      this.model = {
        date1904: node.attributes.date1904 === '1',
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

module.exports = Date1904Xform;
