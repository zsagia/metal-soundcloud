/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from Soundcloud.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Soundcloud.
 * @public
 */

goog.module('Soundcloud.incrementaldom');

/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var $$temp;
  opt_data = opt_data || {};
  ie_open('div', null, null,
      'class', 'soundcloud container-fluid ' + (($$temp = opt_data.elementClasses) == null ? '' : $$temp));
    ie_open('div', null, null,
        'class', 'search-bar');
      ie_open('input', null, null,
          'type', 'text',
          'id', 'searchId',
          'class', 'form-control',
          'placeholder', 'Search for music here...');
      ie_close('input');
    ie_close('div');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Soundcloud.render';
}

exports.render.params = ["elementClasses"];
exports.render.types = {"elementClasses":"any"};
templates = exports;
return exports;

});

class Soundcloud extends Component {}
Soy.register(Soundcloud, templates);
export { Soundcloud, templates };
export default templates;
/* jshint ignore:end */
