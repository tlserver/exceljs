const BaseXform = require('../base-xform');

class PlotVisOnlyXform extends BaseXform {
  get tag() {
    return 'c:plotVisOnly';
  }

  render(xmlStream, model) {
    xmlStream.leafNode(this.tag, {val: '1'});
    // xmlStream.leafNode(this.tag, {val: model.plotVisOnly ? 1 : 0});
  }

  parseOpen(node) {
    // if (node.name === this.tag) {
    //   this.model = {
    //     plotVisOnly: node.attributes.plotVisOnly === '1',
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

module.exports = PlotVisOnlyXform;
