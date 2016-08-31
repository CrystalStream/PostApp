angular.module("FinalApp")
.controller('MainController', ['$scope','$resource', function($scope,$resource){
	Post = $resource('https://jsonplaceholder.typicode.com/posts/:id',{id: '@id'});
	User = $resource('https://jsonplaceholder.typicode.com/users/:id',{id: '@id'});

	$scope.users = User.query();
	$scope.posts = Post.query();
	// query -> GET /post -> Un (importante)arreglo de Post

	$scope.removePost = function(post){
		Post.delete({id: post.id},function(data){
			console.log(data);
		});
		$scope.posts = $scope.posts.filter(function(element){
			return element.id !== post.id;
		});
	}
}])
.controller('PostController', ['$scope','$resource','$routeParams', function($scope,$resource,$routeParams){
	Post = $resource('https://jsonplaceholder.typicode.com/posts/:id',{id: '@id'});
	$scope.post = Post.get({id: $routeParams.id})
}])