(function () {

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItems);

function FoundItems() {
	var ddo = {
		templateUrl: 'foundItems.html',
		scope: {
			found : '<',
			onRemove: '&'
		}

	};
	return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService']
function NarrowItDownController(MenuSearchService) {
	var list = this;

	list.found = [];
	list.searchTerm = "";

	list.getMatchedMenuItems = function(searchTerm) {
		list.found = MenuSearchService.getMatchedMenuItems(searchTerm);
		console.log(searchTerm.length);
	};

	list.onRemove = function(index) {
		list.found.$$state.value.splice(index, 1);
	};

}

MenuSearchService.$inject = ['$http']
function MenuSearchService($http) {
	var service = this;

	var foundItem = [];

	service.getMatchedMenuItems = function(searchTerm){
		return $http ({
			method: "GET",
			url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
		})
		.then(function (result) {
			var res = result.data.menu_items;
			console.log(res);
			for (var i = 0; i < res.length; i++) {
				if(((res[i].description.toLowerCase().indexOf(searchTerm)) !== -1) && (searchTerm.length > 0)) {
					foundItem.push(res[i]);
				}
			}
			return foundItem;
		});
	};
}

}) ();