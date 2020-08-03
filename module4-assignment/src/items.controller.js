(function () {

angular.module('data')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['item']
function ItemsController(item) {
	var itemsCtrl = this;
	
	itemsCtrl.items = item;
}

})();