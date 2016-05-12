'use strict';

import templates from './Soundcloud.soy';
import Component from 'metal-component';
import Soy from 'metal-soy';

// Soundcloud components
import SoundcloudPlayer from './components/SoundcloudPlayer';

// Metal components
import Autocomplete from 'metal-autocomplete';
import List from 'metal-list';

class Soundcloud extends Component {
	constructor(config) {
		super(config);

		this.autocomplete = new metal.Autocomplete({
			elementClasses: 'autocomplete-topbar',
			inputElement: document.querySelector('#searchId'),
			data: function(query) {
				return ['Alabama', 'Alaska'].filter(function(item) {
					return query && item.toLowerCase().indexOf(query.toLowerCase()) === 0;
				});
			}
		});

		this.list = new List({
			element: '#list2',
			itemsHtml: '<a href="#" class="list-group-item">Item1</a><a href="#" class="list-group-item">Item2</a>'
		});

		this.player = new SoundcloudPlayer();
	}
}
Soy.register(Soundcloud, templates);

Soundcloud.STATE = {}

export default Soundcloud;