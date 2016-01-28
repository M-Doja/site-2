angular.module("MessengerApp").factory("MainFactory", function($http, $q){
  var o = {};
  var users = [];
  var newUser = {};
  users.push(newUser);

  o.getUsers = function(){
    var q = $q.defer();
    $http.get('https://msg-app.firebaseio.com/.json').then(function(res){
      console.log(res);
        q.resolve(res);
    });
    return q.promise;
  };
  o.getUsers();
  o.AddUser = function(newUser){
    var q = $q.defer();
  console.log(users);
  $http.post('https://msg-app.firebaseio.com/.json', newUser).success(function(res){
    q.resolve(res);
  });
  return q.promise;
};
  return o;
});
