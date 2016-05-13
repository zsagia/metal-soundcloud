'use strict';

import templates from './SoundcloudPlayer.soy';
import Component from 'metal-component';
import Soy from 'metal-soy';

class SoundcloudPlayer extends Component {
}

Soy.register(SoundcloudPlayer, templates);

SoundcloudPlayer.STATE = {
	isPlaying: {},
	song: {}
}

export default SoundcloudPlayer;
