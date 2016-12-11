myApp.factory('jsonFactory', function($http) {  
	var jsonFactory= {      
		fromLocal: function(url) {       
		        //var url = 'src/Badges.json';
		        var promise = $http.get(url).then(function (response) {
		        	return response.data;
		        });      
		        return promise;
		    }        
		};
		return jsonFactory;
	});