(function () {

angular.module('data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http'];
function MenuDataService($http) {
	var service = this;
	var items = [];
	var items2 = [];

	service.getAllCategories = function() {
		return $http ({
			method: "GET",
			url: "https://davids-restaurant.herokuapp.com/categories.json"
		})
		.then(function (result) {
			items = result.data;
			console.log(items);
			return items;
		});
	};

	service.getItemsForCategory = function(categoryShortName) {
		return $http({
			method: "GET",
			url: "https://davids-restaurant.herokuapp.com/menu_items.json",
			params: {
				category: categoryShortName
			}
		})
		.then(function (result) {
			items2 = result.data.menu_items;
			return items2;
		});

	}
}

}) ();