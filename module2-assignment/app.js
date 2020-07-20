(function () {

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
	var list1 = this;

	list1.toBuy = ShoppingListCheckOffService.getItems();

	list1.removeItem = function(itemIndex) {
		ShoppingListCheckOffService.removeItem(itemIndex);
	}
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
	var list2 = this;
	

	list2.bought = ShoppingListCheckOffService.getItems11();
}

function ShoppingListCheckOffService () {
	var service = this;

	var toBuy = [
	{
		name: "Cookies",
		quantity : 10
	},
	{
		name: "Chips",
		quantity : 5
	},
	{
		name: "Chocolates",
		quantity : 20
	},
	{
		name: "Cold Drinks",
		quantity : 2
	},
	{
		name: "Milk Packets",
		quantity : 5
	}
	];

	var bought = [];

	service.getItems = function () {
		return toBuy;
	};


	service.removeItem = function (itemIndex) {
		var removed = toBuy.splice(itemIndex, 1);
		 
		bought.push(removed);
	};

	service.getItems11 = function () {
		return bought;
	};
}

}) ();