const BaseXform = require('../base-xform');

class BodyPrXform extends BaseXform {
  get tag() {
    return 'a:bodyPr';
  }

  render(xmlStream, model) {
    xmlStream.leafNode(this.tag, {
      rot: BodyPrXform.Attributes[model] || '0',
      spcFirstLastPara: '1',
      vertOverflow: 'ellipsis',
      vert: 'horz',
      wrap: 'square',
      anchor: 'ctr',
      anchorCtr: '1',
    });
  }

  parseOpen(node) {}

  parseText(text) {}

  parseClose(name) {}

  reconcile(model, options) {}
}

BodyPrXform.Attributes = {
  horizontal: '0',
  vertical: '-5400000',
};

module.exports = BodyPrXform;
