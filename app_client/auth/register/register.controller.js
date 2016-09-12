(function(){
	angular
		.module('Vidzy')
		.controller('RegisterCtrl', registerCtrl);
	console.log("register2");
	registerCtrl.$inject = ['$location','authentication'];
	function registerCtrl($location, authentication){
		console.log("register1");
		var vm = this;
		vm.pageHeader = {
			title: 'Create a new account'
		};

		vm.credentials = {
			name : "",
			email : "",
			password : ""
		};

		vm.returnPage = $location.search().page || '/';

		vm.onSubmit = function() {
			vm.formError = "";
			if (!vm.credentials.name || !vm.credentials.email || !vm.credentials.password){
				vm.formError = "All fields required, please try again";
				return false;		
			}else{
				vm.doRegister();
			}
		};
		vm.doRegister = function(){
			vm.formError ="";
			authentication
				.register(vm.credentials)
				.error(function(err){
					vm.formError = err;
				})
				.then(function(){
					$location.search('page', null);
					$location.path(vm.returnPage);
				});
		}
	}
}) ();	