import bb from 'bluebird';
import _ from 'lodash';

var event_store = {};

class EventStorage {

	add_events (events) {
		if (events && events.constructor === Array) {
			var promises = [];

			for(var e in events) {
				let { namespace, person, action, thing } = events[e];
				promises.push(this.add_event(namespace, person, action, thing))
			}
			return bb.all(promises);

		} else { throw new Error('add_events() was called without an array') }
	}

	add_event (namespace, person, action, thing) {
		// if namespace doesn't exist create one
		if (!event_store[namespace]) event_store[namespace] = []; 
		
		let found_event = this._find_event(namespace, person, action, thing);

		if (!found_event) {
			let ev = { person: person, action: action, thing: thing };
			event_store[namespace].push(ev);
		}

		bb.try(() => true);
	}

	_find_event (namespace, person, action, thing) {
		if (!event_store[namespace] ||
				!event_store[namespace][person] ||
				!event_store[namespace][person][action] ||
				!event_store[namespace][person][action][thing]) {
			return null;
		}
		return event_store[namespace][person][action][thing]
	}

	destroy_events (namespace) {
		delete event_store[namespace];
		bb.try(() => true);
	}

}

export default EventStorage;