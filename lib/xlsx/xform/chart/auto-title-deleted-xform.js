const BaseXform = require('../base-xform');

class AutoTitleDeletedXform extends BaseXform {
  get tag() {
    return 'c:autoTitleDeleted';
  }

  render(xmlStream, model) {
    xmlStream.leafNode(this.tag, {
      val: model.autoTitleDeleted ? 1 : 0,
    });
  }

  parseOpen(node) {
    if (node.name === this.tag) {
      this.model = {
        autoTitleDeleted: node.attributes.autoTitleDeleted === '1',
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

module.exports = AutoTitleDeletedXform;
