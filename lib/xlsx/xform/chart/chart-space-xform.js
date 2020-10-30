const XmlStream = require('../../../utils/xml-stream');

const BaseXform = require('../base-xform');
const StaticXform = require('../static-xform');

const Date1904Xform = require('./date1904-xform');
const LangXform = require('./lang-xform');
const RoundedCornersXform = require('./rounded-corners-xform');
const alternateContentJSON = require('./alternate-content');
const ChartXform = require('./chart-xform');
const spPrJSON = require('./chart-space/sp-pr');
const txPrJSON = require('./chart-space/tx-pr');
const printSettingsJSON = require('./printSettings');

class ChartSpaceXform extends BaseXform {
  constructor() {
    super();

    this.map = {
      'c:date1904': new Date1904Xform(),
      'c:lang': new LangXform(),
      'c:roundedCorners': new RoundedCornersXform(),
      'mc:AlternateContent': new StaticXform(alternateContentJSON),
      'c:chart': new ChartXform(),
      'c:spPr': new StaticXform(spPrJSON),
      'c:txPr': new StaticXform(txPrJSON),
      'c:printSettings': new StaticXform(printSettingsJSON),
    };
  }

  get tag() {
    return 'c:chartSpace';
  }

  prepare(model, options) {
    this.map['c:chart'].prepare(model, options);
  }

  render(xmlStream, model) {
    xmlStream.openXml(XmlStream.StdDocAttributes);
    xmlStream.openNode(this.tag, ChartSpaceXform.WORKSHEET_ATTRIBUTES);

    this.map['c:date1904'].render(xmlStream, model);
    this.map['c:lang'].render(xmlStream, model);
    this.map['c:roundedCorners'].render(xmlStream, model);
    this.map['mc:AlternateContent'].render(xmlStream, model);
    this.map['c:chart'].render(xmlStream, model);
    this.map['c:spPr'].render(xmlStream, model);
    this.map['c:txPr'].render(xmlStream, model);
    this.map['c:printSettings'].render(xmlStream, model);

    xmlStream.closeNode();
  }

  parseOpen(node) {}

  parseText(text) {}

  parseClose(name) {}

  reconcile(model, options) {}
}

ChartSpaceXform.WORKSHEET_ATTRIBUTES = {
  'xmlns:c': 'http://schemas.openxmlformats.org/drawingml/2006/chart',
  'xmlns:a': 'http://schemas.openxmlformats.org/drawingml/2006/main',
};

module.exports = ChartSpaceXform;
