RecipeController = ($scope, $http, $log) ->
    $scope.ingredients = []
    $scope.steps = []
    $http.get('../data/json.txt')
        .success (data, status, headers, config) ->
            if (data && status == 200)
                $scope.ingredients = data[0]
                $scope.steps = data[1]
