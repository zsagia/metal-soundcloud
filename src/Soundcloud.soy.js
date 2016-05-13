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
  ie_open('div', null, null,
      'class', 'soundcloud container-fluid ' + (($$temp = opt_data.elementClasses) == null ? '' : $$temp));
    ie_open('div', null, null,
        'class', 'search-bar');
      ie_open('form', null, null,
          'data-onsubmit', 'onSubmitEventHandler');
        ie_open('input', null, null,
            'data-onkeyup', 'inputChangeEventHandler',
            'type', 'text',
            'id', 'searchId',
            'class', 'form-control',
            'placeholder', 'Search for music here...');
        ie_close('input');
      ie_close('form');
    ie_close('div');
    var trackList25 = opt_data.tracks;
    var trackListLen25 = trackList25.length;
    for (var trackIndex25 = 0; trackIndex25 < trackListLen25; trackIndex25++) {
      var trackData25 = trackList25[trackIndex25];
      ie_open('div', null, null,
          'class', 'card-horizontal',
          'data-onclick', 'selectTrackEventHandler');
        ie_open('div', null, null,
            'class', 'card-row');
          ie_open('div', null, null,
              'class', 'card-col-1');
            if (trackData25.artwork_url != null) {
              ie_open('img', null, null,
                  'alt', 'thumbnail',
                  'class', 'img-responsive',
                  'src', trackData25.artwork_url);
              ie_close('img');
            } else if (trackData25.user.avatar_url != null) {
              ie_open('img', null, null,
                  'alt', 'thumbnail',
                  'class', 'img-responsive',
                  'src', trackData25.user.avatar_url);
              ie_close('img');
            } else {
              ie_open('img', null, null,
                  'alt', 'thumbnail',
                  'class', 'img-responsive',
                  'src', trackData25.waveform_url);
              ie_close('img');
            }
          ie_close('div');
          ie_open('div', null, null,
              'class', 'card-col-7 card-col-gutters');
            ie_open('h4');
              itext((goog.asserts.assert((trackData25.user.username) != null), trackData25.user.username));
            ie_close('h4');
            ie_open('p');
              itext((goog.asserts.assert((trackData25.title) != null), trackData25.title));
            ie_close('p');
          ie_close('div');
        ie_close('div');
      ie_close('div');
    }
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Soundcloud.render';
}

exports.render.params = ["elementClasses","tracks"];
exports.render.types = {"elementClasses":"any","tracks":"any"};
templates = exports;
return exports;

});

class Soundcloud extends Component {}
Soy.register(Soundcloud, templates);
export { Soundcloud, templates };
export default templates;
/* jshint ignore:end */
