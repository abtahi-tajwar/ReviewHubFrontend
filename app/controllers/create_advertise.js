app.controller('CreateAdvertise', function($scope, $http) {
    $scope.title = ""
    $scope.description = ""
    $scope.category = 2002
    $scope.UserId = 3
    $scope.expirationDate = ""
    $scope.image = ""

    $scope.categories = []
    $http.get(routes.getAllCategories).then(response => {
        $scope.categories = response.data
    })

    $scope.handleCreateAdvertise = (e) => {
        //e.preventDefault();
        $scope.image = document.getElementById("advertise-image").files[0]
        const submitData = {
            Title: $scope.title,
            Description: $scope.description,
            AdvertiseCategoryId: $scope.category,
            UserId: $scope.UserId,
            ExpirationDate: document.getElementById("expiration-date").value,
            image: $scope.image
        }
        postFormValue(routes.createAdvertise, submitData).then(response => $scope.reset())
    }
})