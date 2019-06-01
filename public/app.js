var app = angular.module("searchPage", []);

	app.filter('searchArr', function(){
		return function(dataArr, searchString){
			if(!searchString){
				return dataArr.slice(0, 11);
			}
			
			var result = [];
			
			var strarr = searchString.toLowerCase().split(" ");
			var searchString = strarr.join("");
    		angular.forEach(dataArr, function(item){
			
			var arr = item.movieName.toLowerCase().split(" ");
			var movieName = arr.join("");
			if(movieName.indexOf(searchString) !== -1){
				result.push(item);
			}
			
			// else if(item.altText.toLowerCase().indexOf(searchString) !== -1){
			// 	result.push(item);
			// }
			// var narr = item.altText.toLowerCase().split(",");
			// angular.forEach(narr, function(str){
			// 	var temparr = str.split(" ");
			// 	var temp = arr.join("");
			// 	if(temp.indexOf(searchString) !== -1){
			// 		result.push(item);
			// 	}
			// })

			});
			return result.slice(0, 11);
		};
	});

function mainController($scope, $http){
	$http.get('/movies')
	.success(function(data){
		$scope.movies = data;
	})
	.error(function(data) {
		console.log("error accepting data");
	});
}