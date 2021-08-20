app.controller('advertises', function($scope, $http, $routeParams) {
    $scope.advertises = []
    $scope.hasAdvertise = false
    $http.get(routes.getAdvertiseByCategory($routeParams.id)).then(response => {
        $scope.advertises = response.data
        $scope.hasAdvertise = ($scope.advertises.length > 0 ? true : false)
    })
})