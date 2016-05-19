var myApp = angular.module('myApp',[]);
myApp.controller('MyController',function MyController($scope){
	$scope.movielists=[
	    { title: 'The Matrix', rating: 7.5, category: 'Action'},
        { title: 'Focus', rating: 6.9, category: 'Comedy'},
        { title: 'The Lazarus Effect', rating: 6.4, category: 'Thriller'},
        { title: 'Everly', rating: 5.0, category: 'Action'},
        { title: 'Maps to the Stars', rating: 7.5, category: 'Drama'}
	];
	$scope.getCategories = function() {
    var categories = [];
    angular.forEach($scope.movielists, function(item) {
        if (categories.indexOf(item.category) == -1) {
          categories.push(item.category);	
        }
      
    });
    return categories;
  }

});