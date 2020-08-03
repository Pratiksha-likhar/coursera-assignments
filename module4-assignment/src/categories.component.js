(function () {

angular.module('data')
.component('categories', {
	templateUrl: 'src/templates/menu.template.html',
	bindings: {
		items: '<'
	}
});

}) ();