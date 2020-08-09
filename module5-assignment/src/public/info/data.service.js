(function () {

angular.module('public')
.service('DataService', DataService);

DataService.$inject = ['ApiPath', '$http'];
function DataService(ApiPath, $http) {
	var service = this;

	service.firstName = "";
	service.lastName = "";
	service.email = "";
	service.phone = "";

	service.shortName= "";
	service.title = "";
	service.description = "";

	service.setInfo = function(firstName, lastName, email, phone) {
		service.firstName = firstName;
		service.lastName = lastName;
		service.email = email;
		service.phone = phone;
	};

	service.setItemInfo = function(shortName, title, description) {
		service.shortName = shortName;
		service.title = title;
		service.description = description;
	};

	service.getName = function() {
		return (service.firstName + " " + service.lastName);
	};

	service.getEmail = function() {
		return service.email;
	};

	service.getPhone = function() {
		return service.phone;
	};

	service.getshortName = function() {
		return service.shortName;
	};

	service.getTitle = function() {
		return service.title;
	};

	service.getDescription = function() {
		return service.description;
	};

	service.getItems = function () {
    return $http.get(ApiPath + '/menu_items.json')
    .then(function (response) {
      return response.data;
    });
  };
}

}) ();