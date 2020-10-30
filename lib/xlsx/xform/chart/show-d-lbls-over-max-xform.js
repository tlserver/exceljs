const BaseXform = require('../base-xform');

class ShowDLblsOverMaxXform extends BaseXform {
  get tag() {
    return 'c:showDLblsOverMax';
  }

  render(xmlStream, model) {
    xmlStream.leafNode(this.tag, {
      val: model.showDLblsOverMax ? 1 : 0,
    });
  }

  parseOpen(node) {
    if (node.name === this.tag) {
      this.model = {
        showDLblsOverMax: node.attributes.showDLblsOverMax === '1',
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

module.exports = ShowDLblsOverMaxXform;
