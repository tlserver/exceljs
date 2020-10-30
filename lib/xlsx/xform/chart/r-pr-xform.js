const BaseXform = require('../base-xform');

class RPrXform extends BaseXform {
  get tag() {
    return 'a:rPr';
  }

  render(xmlStream, model) {
    xmlStream.leafNode(this.tag, {
      sz: model.size ? Math.floor(model.size * 100) : undefined,
      b: model.bold ? 1 : 0,
      i: model.italic ? 1 : 0,
      u: RPrXform.UnderlineAttributes[model.underline],
    });
  }

  parseOpen(node) {}

  parseText() {}

  parseClose() {}
}

RPrXform.UnderlineAttributes = {
  false: 'none',
  true: 'sng',
  none: 'none',
  single: 'sng',
  double: 'dbl',
  heavy: 'heavy',
  words: 'words',
};

module.exports = RPrXform;
