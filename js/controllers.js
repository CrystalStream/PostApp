angular.module("FinalApp")
.controller('MainController', ['$scope','$resource','PostResource', function($scope,$resource,PostResource){
	User = $resource('https://jsonplaceholder.typicode.com/users/:id',{id: '@id'});

	$scope.users = User.query();
	$scope.posts = PostResource.query();
	// query -> GET /post -> Un (importante)arreglo de Post

	$scope.removePost = function(post){
		PostResource.delete({id: post.id},function(data){
			console.log(data);
		});
		$scope.posts = $scope.posts.filter(function(element){
			return element.id !== post.id;
		});
	}
}])
.controller('PostController', ['$scope','$resource','$routeParams','PostResource','$location', function($scope,$resource,$routeParams,PostResource,$location){
	$scope.title = "Edit this post";
	$scope.post = PostResource.get({id: $routeParams.id})
	$scope.newPost = function(){
		PostResource.update({id: $scope.post.id},{data: $scope.post},function(data){
			console.log(data);
			$location.path('/');
		});
	}
}])
.controller('NewPostController', ['$scope','$resource','PostResource','$location', function($scope,$resource,PostResource,$location){	
	$scope.post = {};
	$scope.title = "Create your own post";
	$scope.newPost = function(){
		PostResource.save({data: $scope.post},function(data){
			console.log(data);
			$location.path('/');
		});
	}
	
}])