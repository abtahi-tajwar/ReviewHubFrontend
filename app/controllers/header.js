app.controller("header", function($scope, $http) {
    $scope.categories = [
        {
            Name: "Cat 1"
        },
        {
            Name: "Cat 2"
        }
    ]
    $http.get(routes.getAllCategories).then(response => {
        $scope.categories = response.data
        console.log($scope.categories)
    })
})