const BaseXform = require('../base-xform');
const StaticXform = require('../static-xform');

const TitleXform = require('./title-xform');
const AutoTitleDeletedXform = require('./auto-title-deleted-xform');
const PlotAreaXform = require('./plot-area-xform');
const legendJSON = require('./legend');
const PlotVisOnlyXform = require('./plot-vis-only-xform');
const DispBlanksAsXform = require('./disp-blanks-as-xform');
const extLstJSON = require('./chart/ext-lst');
const ShowDLblsOverMaxXform = require('./show-d-lbls-over-max-xform');

class ChartXform extends BaseXform {
  constructor() {
    super();

    this.map = {
      'c:title': new TitleXform(),
      'c:autoTitleDeleted': new AutoTitleDeletedXform(),
      'c:plotArea': new PlotAreaXform(),
      'c:legend': new StaticXform(legendJSON),
      'c:plotVisOnly': new PlotVisOnlyXform(),
      'c:dispBlanksAs': new DispBlanksAsXform(),
      'c:extLst': new StaticXform(extLstJSON),
      'c:showDLblsOverMax': new ShowDLblsOverMaxXform(),
    };
  }

  get tag() {
    return 'c:chart';
  }

  prepare(model, options) {
    this.map['c:plotArea'].prepare(model);
  }

  render(xmlStream, model) {
    xmlStream.openNode(this.tag);

    this.map['c:title'].render(xmlStream, model.title);
    this.map['c:autoTitleDeleted'].render(xmlStream, model);
    this.map['c:plotArea'].render(xmlStream, model);
    this.map['c:legend'].render(xmlStream, model);
    this.map['c:plotVisOnly'].render(xmlStream, model);
    this.map['c:dispBlanksAs'].render(xmlStream, model);
    this.map['c:extLst'].render(xmlStream, model);
    this.map['c:showDLblsOverMax'].render(xmlStream, model);

    xmlStream.closeNode();
  }

  parseOpen(node) {}

  parseText(text) {}

  parseClose(name) {}

  reconcile(model, options) {}
}

module.exports = ChartXform;
