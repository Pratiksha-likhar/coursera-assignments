(function() {

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['DataService', 'items'];
function SignupController(DataService, items) {
	var reg = this;

	reg.item_shortName = "";
	reg.item_title = "";
	reg.item_description = "";

	reg.items = items;

	reg.signup = function () {
		reg.completed = true;
		console.log("name: ", reg.user.firstName);

		for(i = 0; i < reg.items.menu_items.length; i++) {
			if(reg.items.menu_items[i].short_name === reg.user.favDish) {
				reg.msg1 = "Correct dish number";
				reg.item_shortName = reg.items.menu_items[i].short_name;
				reg.item_title = reg.items.menu_items[i].name;
				reg.item_description = reg.items.menu_items[i].description;
			}
			else {
				reg.msg2 = "No such menu number exists";
			}
		}

		DataService.setInfo(reg.user.firstName, reg.user.lastName, reg.user.email, reg.user.phone);
		DataService.setItemInfo(reg.item_shortName, reg.item_title, reg.item_description);
	};

}
}) ();