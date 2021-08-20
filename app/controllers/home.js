app.controller("home", function($scope, $http) {
    $scope.advertises = []
    $scope.featured_advertises = []

    $http.get(routes.getAllAdvertises).then(response => {
        $scope.advertises = response.data
    })
    $http.get(routes.getFeaturedAdvertises).then(response => {
        $scope.featured_advertises = response.data
        console.log($scope.featured_advertises)
    })
})