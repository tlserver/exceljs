const BaseXform = require('../base-xform');

class LangXform extends BaseXform {
  get tag() {
    return 'c:lang';
  }

  render(xmlStream, model) {
    xmlStream.leafNode(this.tag, {val: 'zh-TW'});
    // xmlStream.leafNode(this.tag, {val: model.lang});
  }

  parseOpen(node) {
    // if (node.name === this.tag) {
    //   this.model = {
    //     lang: node.attributes.lang,
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

module.exports = LangXform;
