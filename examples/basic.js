var Insight = require('../lib/insight');

var metrics = new Insight()

metrics.add_events([
	{
		namespace: 'products',
		person: 'josh',
		action: 'bought',
		thing: 'macbook pro'
	},
	{
		namespace: 'products',
		person: 'dave',
		action: 'bought',
		thing: 'asus G75W'
	}
]).then(function() {
	/*
	* Recommendations for takes user, namespace, action
	*/
	var recommendations = metrics.recommendations_for('josh', 'products', 'bought');
	// var recommendations = metrics.recommendations_for({ user: 'josh', in: 'products', action: 'bought'});
	console.log(JSON.stringify(recommendations));
})

console.log(metrics);

// var boughtItem = function(user, action, item) {
// 	metrics.add_events([{
// 		namespace: 'products',
// 		person: user.first_name,
// 		action: action,
// 		thing: item
// 	}]);
// 	console.log(`action '${action}' recorded!`);
// };

// var user {
// 	first_name: 'Josh',
// 	last_name: 'Bedo'
// };
// var action = 'bought';
// var item = 'asus G75W';
// boughtItem(user, action, item);