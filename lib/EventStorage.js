'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var event_store = {};

var EventStorage = (function () {
	function EventStorage() {
		_classCallCheck(this, EventStorage);
	}

	_createClass(EventStorage, [{
		key: 'add_events',
		value: function add_events(events) {
			if (events && events.constructor === Array) {
				var promises = [];

				for (var e in events) {
					var _events$e = events[e];
					var namespace = _events$e.namespace;
					var person = _events$e.person;
					var action = _events$e.action;
					var thing = _events$e.thing;

					promises.push(this.add_event(namespace, person, action, thing));
				}
				return _bluebird2['default'].all(promises);
			} else {
				throw new Error('add_events() was called without an array');
			}
		}
	}, {
		key: 'add_event',
		value: function add_event(namespace, person, action, thing) {
			// if namespace doesn't exist create one
			if (!event_store[namespace]) event_store[namespace] = [];

			var found_event = this._find_event(namespace, person, action, thing);

			if (!found_event) {
				var ev = { person: person, action: action, thing: thing };
				event_store[namespace].push(ev);
			}

			_bluebird2['default']['try'](function () {
				return true;
			});
		}
	}, {
		key: '_find_event',
		value: function _find_event(namespace, person, action, thing) {
			if (!event_store[namespace] || !event_store[namespace][person] || !event_store[namespace][person][action] || !event_store[namespace][person][action][thing]) {
				return null;
			}
			return event_store[namespace][person][action][thing];
		}
	}, {
		key: 'destroy_events',
		value: function destroy_events(namespace) {
			delete event_store[namespace];
			_bluebird2['default']['try'](function () {
				return true;
			});
		}
	}]);

	return EventStorage;
})();

exports['default'] = EventStorage;
module.exports = exports['default'];