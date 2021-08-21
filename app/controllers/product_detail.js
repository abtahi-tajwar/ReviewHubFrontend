app.controller('product_detail', function($scope, $http, $routeParams) {
    $scope.product_detail = []
    $scope.hasproduct_detail = false
    $http.get(routes.product_detail($routeParams.id)).then(response => {
        $scope.product_detail = response.data
        $scope.hasproduct_detail = ($scope.advertises.length > 0 ? true : false)
    })
})
