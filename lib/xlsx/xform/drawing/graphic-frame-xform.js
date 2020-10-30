const BaseXform = require('../base-xform');
const StaticXform = require('../static-xform');

const NvGraphicPrXform = require('./nv-graphic-pr-xform');
const GraphicXform = require('./graphic-xform');

const xfrmJSON = require('./xfrm');

class GraphicFrameXform extends BaseXform {
  constructor() {
    super();

    this.map = {
      'xdr:nvGraphicFramePr': new NvGraphicPrXform(),
      'xdr:xfrm': new StaticXform(xfrmJSON),
      'a:graphic': new GraphicXform(),
    };
  }

  get tag() {
    return 'xdr:graphicFrame';
  }

  prepare(model, options) {
    model.index = options.index + 1;
    model.type = 'Chart ';
  }

  render(xmlStream, model) {
    xmlStream.openNode(this.tag);
    xmlStream.addAttribute('macro', '');

    this.map['xdr:nvGraphicFramePr'].render(xmlStream, model);
    this.map['xdr:xfrm'].render(xmlStream, model);
    this.map['a:graphic'].render(xmlStream, model);

    xmlStream.closeNode();
  }

  parseOpen(node) {
    if (this.parser) {
      this.parser.parseOpen(node);
      return true;
    }
    switch (node.name) {
      case this.tag:
        this.reset();
        break;
      default:
        this.parser = this.map[node.name];
        if (this.parser) {
          this.parser.parseOpen(node);
        }
        break;
    }
    return true;
  }

  parseText() {}

  parseClose(name) {
    if (this.parser) {
      if (!this.parser.parseClose(name)) {
        this.mergeModel(this.parser.model);
        this.parser = undefined;
      }
      return true;
    }
    switch (name) {
      case this.tag:
        return false;
      default:
        // not quite sure how we get here!
        return true;
    }
  }
}

module.exports = GraphicFrameXform;
