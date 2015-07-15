import bb from 'bluebird';
import _ from 'lodash';

import EventStorage from './EventStorage';

class Insight {
	constructor() {
		// add storage adapter for MongoDB
		this.eventStorage = new EventStorage();
	}

	/*
	* Add Events
	*/
	add_events (events) {
		return this.eventStorage.add_events(events).then(() => events);
	}

	// _normalize_similarities (similarities, actions) {
	// 	var temp = {};

	// 	for(var weights in similarities) {
	// 		for(var weight in weights) {
	// 			console.log(weight);
	// 		}
	// 	}

	// 	return temp;
	// }

	// _calculate_similarities_from_thing (namespace, thing, things, actions, config) {
	// 	this.eventStorage._calculate_similarities_from_thing(namespace, thing, things, Object.keys(actions, _.clone(config))
	// 		.then((similarities) => {
	// 			similarities = this._normalize_similarities(similarities, actions);
	// 			return similarities;
	// 		})
	// 	)
	// }
}

export default Insight