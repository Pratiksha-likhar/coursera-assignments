(function () {

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'src/templates/home.template.html'
	})

	.state('categories', {
		url: '/categories',
		templateUrl: 'src/templates/categories.template.html',
		controller: 'CategoriesController as categories',
		resolve: {
			items: ['MenuDataService', function (MenuDataService) {
				return MenuDataService.getAllCategories();
			}]
		} 
	})

	.state('categories.items', {
		url: '/items/{shortName}',
		templateUrl: 'src/templates/items.template.html',
		controller: 'ItemsController as itemsCtrl',
		resolve: {
			item: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
				return MenuDataService.getItemsForCategory($stateParams.shortName);
			}]
		}

	});
}


})();