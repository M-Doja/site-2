angular.module('MessengerApp').controller('MainController', function($http, $state){
console.log("I'm the Home Controller");
  var vm = this;
  // document.getElementById('sideNav').style.display = 'none';

  vm.showNav = function() {
    document.getElementById('sideNav').style.display = 'inline';
  }
//   vm.newUser = {};
//   vm.users = [];
//
//   vm.getUser = function(){
//     MainFactory.getUsers().then(function(res){
//       vm.users = res;
//       console.log(vm.users);
//
//     });
//   };
// vm.getUser();
//   vm.AddUser = function(){
//   MainFactory.AddUser(vm.newUser).then(function(res){
//     console.log(res);
//     // vm.currentuserName = vm.newUser.name
//     // console.log(vm.currentuserName)
//     $state.go('home');
//   });
// };
});
