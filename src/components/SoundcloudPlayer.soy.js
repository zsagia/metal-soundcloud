/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from SoundcloudPlayer.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace SoundcloudPlayer.
 * @public
 */

goog.module('SoundcloudPlayer.incrementaldom');

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
      'class', 'soundcloud-player container-fluid ' + (($$temp = opt_data.elementClasses) == null ? '' : $$temp));
    ie_open('div', null, null,
        'class', 'btn-group btn-group-justified');
      ie_open('div', null, null,
          'class', 'btn-group');
        ie_open('button', null, null,
            'class', 'btn btn-default',
            'type', 'button');
          ie_void('span', null, null,
              'class', 'icon-monospaced icon-fast-backward');
        ie_close('button');
      ie_close('div');
      ie_open('div', null, null,
          'class', 'btn-group');
        ie_open('button', null, null,
            'class', 'btn btn-default',
            'type', 'button');
          ie_void('span', null, null,
              'class', 'icon-monospaced icon-play');
        ie_close('button');
      ie_close('div');
      ie_open('div', null, null,
          'class', 'btn-group');
        ie_open('button', null, null,
            'class', 'btn btn-default',
            'type', 'button');
          ie_void('span', null, null,
              'class', 'icon-monospaced icon-fast-forward');
        ie_close('button');
      ie_close('div');
    ie_close('div');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'SoundcloudPlayer.render';
}

exports.render.params = ["elementClasses"];
exports.render.types = {"elementClasses":"any"};
templates = exports;
return exports;

});

class SoundcloudPlayer extends Component {}
Soy.register(SoundcloudPlayer, templates);
export { SoundcloudPlayer, templates };
export default templates;
/* jshint ignore:end */
