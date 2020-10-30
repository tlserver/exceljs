const BaseXform = require('../base-xform');

const RichXform = require('./rich-xform');
const StrRefXform = require('./str-ref-xform');

class TxXform extends BaseXform {
  constructor() {
    super();

    this.map = {
      'c:rich': new RichXform(),
      'c:strRef': new StrRefXform(),
    };
  }

  get tag() {
    return 'c:tx';
  }

  prepare(model, options) {
    if (typeof model.rich === 'string') {
      model.rich = [{text: model.rich}];
    }
  }

  render(xmlStream, model) {
    xmlStream.openNode(this.tag);

    if (model.rich) {
      this.map['c:rich'].render(xmlStream, model.rich);
    }
    if (model.strRef) {
      this.map['c:strRef'].render(xmlStream, model.strRef);
    }

    xmlStream.closeNode();
  }

  parseOpen(node) {}

  parseText(text) {}

  parseClose(name) {}

  reconcile(model, options) {}
}

module.exports = TxXform;
