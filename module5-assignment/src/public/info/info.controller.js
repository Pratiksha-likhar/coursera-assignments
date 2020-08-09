(function () {

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['DataService', 'ApiPath'];
function InfoController(DataService, ApiPath) {
	var infoCtrl = this;

	infoCtrl.basePath = ApiPath;

	infoCtrl.name = DataService.getName();
	infoCtrl.email = DataService.getEmail();
	infoCtrl.phone = DataService.getPhone();
	infoCtrl.shortName = DataService.getshortName();
	infoCtrl.title = DataService.getTitle();
	infoCtrl.description = DataService.getDescription();
	
}

}) ();