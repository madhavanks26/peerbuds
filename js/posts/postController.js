myApp.controller('postController',function(jsonFactory,PagerService,$scope,$location){
   var postsUrl="Posts.json";

   jsonFactory.fromLocal("src/"+postsUrl).then(function(d){
    $scope.postsRow=d.posts.row;
        		var posts_len=d.posts.row.length;/*
        		for(var i=0;i<posts_len;i++){
        				//console.log($scope.postsRow[i]._Id);
        				//$scope.dummyItems =$scope.postsRow[i];       	
        			}*/
        			$scope.dummyItems=$scope.postsRow;        		
        			initController();
        		});

   $scope.pager = {};
   $scope.setPage = setPage;



   function initController() {
            // initialize to page 1
            $scope.setPage(1);
        }

  function setPage(page) {
        	if (page < 1 || page > $scope.pager.totalPages) {
        		return;
        	}

            // get pager object from service
            $scope.pager = PagerService.GetPager($scope.dummyItems.length, page);

            // get current page of items
            $scope.items = $scope.dummyItems.slice($scope.pager.startIndex, $scope.pager.endIndex + 1);
        }
  
});