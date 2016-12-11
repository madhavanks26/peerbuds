myApp.controller('postDetailController',function(jsonFactory,PagerService,$scope,$location){
	var postsUrl="Posts.json";
console.log(postsUrl);
	jsonFactory.fromLocal("src/"+postsUrl).then(function(d){
		$scope.postsRow=d.posts.row;
		console.log($scope.postsRow);
		var posts_len=d.posts.row.length;
		for(var i=0;i<posts_len;i++){
        				//console.log($scope.postsRow[i]._Id);
        				$scope.items =$scope.postsRow[i];       	
        			}
        		});
});