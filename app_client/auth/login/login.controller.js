(function(){
	angular
		.module('Vidzy')
		.controller('LoginCtrl', loginCtrl);
	console.log("login1");
	loginCtrl.$inject = ['$location','authentication'];
	function loginCtrl($location, authentication){
		console.log("login2");
		var vm = this;
		vm.pageHeader = {
			title: 'Sign in'
		};

		vm.credentials = {
			email : "",
			password : ""
		};

		vm.returnPage = $location.search().page || '/';

		vm.onSubmit = function() {
			vm.formError = "";
			if (!vm.credentials.email || !vm.credentials.password){
				vm.formError = "All fields required, please try again";
				return false;		
			}else{
				console.log("succesful");
				vm.doLogin();
			}
		};
		vm.doLogin = function(){
			console.log("dologin");
			vm.formError ="";
			authentication
				.login(vm.credentials)
				.error(function(err){
					console.log(err);
					vm.formError = err;
				})
				.then(function(){
					$location.search('page', null);
					$location.path(vm.returnPage);
				});
		}
	}
}) ();	