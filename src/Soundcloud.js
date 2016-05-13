'use strict';

import templates from './Soundcloud.soy';
import Component from 'metal-component';
import Soy from 'metal-soy';

// Soundcloud components
import SoundcloudPlayer from './components/SoundcloudPlayer';

// Metal components
import Autocomplete from 'metal-autocomplete';
import List from 'metal-list';

// Third party imports
var SC = require('soundcloud');
var Axios = require('axios');

class Soundcloud extends Component {
	attached() {
		SC.initialize({
			client_id: '6323ee40d2426a7f286e21ce25e59342'
		});

		this.searchInput = document.querySelector('#searchId');

		this.autocomplete = new metal.Autocomplete({
			inputElement: this.searchInput
		});
	}

	onSubmitEventHandler(event) {
		event.preventDefault();

		let app = this;

		Axios.get(`https://api.soundcloud.com/tracks?client_id=6323ee40d2426a7f286e21ce25e59342&q=` + this.searchInput.value)
      .then(function (response) {
        // Update track state
        app.setTracks_(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
	}

	inputChangeEventHandler(event) {
		let app = this;

		Axios.get(`https://api.soundcloud.com/tracks?client_id=6323ee40d2426a7f286e21ce25e59342&q=` + event.target.value)
			.then(function (response) {
				// Update track state
				let autocompleteTracks = [];

				for(let i = 0; i < response.data.length; i++) {
					autocompleteTracks.push(response.data[i].title);
				}

				app.autocomplete.data = autocompleteTracks;
			})
			.catch(function (err) {
				console.log(err);
			});
	}

	getTracks_() {
		return this.tracks;
	}

	selectTrackEventHandler(track) {
		console.log(track);
	}

	setTracks_(values) {
		let tracks = [];

		if (values !== undefined) {
			for(let i = 0; i < values.length; i++) {
				tracks.push(values[i]);

				if (i < 1) console.log(values[i]);
			}
		}

		this.tracks = tracks;
	}


}
Soy.register(Soundcloud, templates);

Soundcloud.STATE = {
	autocomplete: null,
	track: {stream_url: '', title: '', artwork_url: ''},
	tracks: {
		value: []
	},
	playStatus: 'STOPPED',
	elapsed: '00:00',
	total: '00:00',
	position: 0,
	playFromPosition: 0,
	autoCompleteValue: [],
	searchInput: null
}

export default Soundcloud;
