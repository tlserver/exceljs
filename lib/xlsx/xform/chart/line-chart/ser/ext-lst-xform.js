const BaseXform = require('../../../base-xform');

class ExtLstXform extends BaseXform {
  get tag() {
    return 'c:extLst';
  }

  render(xmlStream, model) {
    xmlStream.openNode(this.tag);

    xmlStream.openNode('c:ext', {uri: '{C3380CC4-5D6E-409C-BE32-E72D297353CC}', 'xmlns:c16': 'http://schemas.microsoft.com/office/drawing/2014/chart'});
    xmlStream.leafNode('c16:uniqueId', {val: `{${String(model).padStart(8, '0')}-8C6E-415B-BADB-B08D18886B17}`});
    xmlStream.closeNode();

    xmlStream.closeNode();
  }

  parseOpen(node) {}

  parseText(text) {}

  parseClose(name) {}

  reconcile(model, options) {}
}

module.exports = ExtLstXform;
