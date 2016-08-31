angular.module("FinalApp")
.controller('MainController', ['$scope','$resource', function($scope,$resource){
	Post = $resource('https://jsonplaceholder.typicode.com/posts/:id',{id: '@id'});
	User = $resource('https://jsonplaceholder.typicode.com/users/:id',{id: '@id'});

	$scope.users = User.query();
	$scope.posts = Post.query();
	// query -> GET /post -> Un (importante)arreglo de Post
}])