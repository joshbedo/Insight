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

var _EventStorage = require('./EventStorage');

var _EventStorage2 = _interopRequireDefault(_EventStorage);

var Insight = (function () {
	function Insight() {
		_classCallCheck(this, Insight);

		// add storage adapter for MongoDB
		this.eventStorage = new _EventStorage2['default']();
	}

	_createClass(Insight, [{
		key: 'add_events',

		/*
  * Add Events
  */
		value: function add_events(events) {
			return this.eventStorage.add_events(events).then(function () {
				return events;
			});
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

	}]);

	return Insight;
})();

exports['default'] = Insight;
module.exports = exports['default'];