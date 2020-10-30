const BaseXform = require('../base-xform');

class DispBlanksAsXform extends BaseXform {
  get tag() {
    return 'c:dispBlanksAs';
  }

  render(xmlStream, model) {
    xmlStream.leafNode(this.tag, {val: 'gap'});
    // xmlStream.leafNode(this.tag, {val: model.dispBlanksAs});
  }

  parseOpen(node) {
    // if (node.name === this.tag) {
    //   this.model = {
    //     dispBlanksAs: node.attributes.dispBlanksAs,
    //   };
    //   return true;
    // }
    // return false;
  }

  parseText() {}

  parseClose() {
    return false;
  }
}

module.exports = DispBlanksAsXform;
