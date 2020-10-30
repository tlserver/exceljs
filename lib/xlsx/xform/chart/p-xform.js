const BaseXform = require('../base-xform');
// const StaticXform = require('../static-xform');

// const pPrJSON = require('./p-pr');
const RXform = require('./r-xform');

class PXform extends BaseXform {
  constructor() {
    super();

    this.map = {
      // 'a:pPr': new StaticXform(pPrJSON),
      'a:r': new RXform(), // todo rich text support
    };
  }

  get tag() {
    return 'a:p';
  }

  render(xmlStream, model) {
    xmlStream.openNode(this.tag);

    // this.map['a:pPr'].render(xmlStream, model);
    model.forEach(m => {
      this.map['a:r'].prepare(m);
      this.map['a:r'].render(xmlStream, m);
    });
    // xmlStream.leafNode('a.endParaRPr', {lang: 'zh-TW', altLang: 'en-US'});

    xmlStream.closeNode();
  }

  parseOpen(node) {}

  parseText(text) {}

  parseClose(name) {}

  reconcile(model, options) {}
}

module.exports = PXform;
