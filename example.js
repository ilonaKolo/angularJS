var app = angular.module('exampleApp', ['ngRoute', 'ngAnimate']);
app.config(function($routeProvider) {
    $routeProvider
        .when('/example1', {
            templateUrl: "example.html",
            controller: "example1Ctrl"
        })
        .when('/example2', {
            templateUrl: "example.html",
            controller: "example2Ctrl"
        })
        .when('/example3', {
            templateUrl: "example.html",
            controller: "example3Ctrl"
        })
        .when('/example4', {
            templateUrl: "example.html",
            controller: "example4Ctrl"
        })
        .when('/example5', {
            templateUrl: "example.html",
            controller: "example5Ctrl"
        })
        .when('/example6', {
            templateUrl: "example.html",
            controller: "example6Ctrl"
        })
});

app.controller("example1Ctrl", function($scope, $route) {
    $scope.example = {
        step: 'Do this 1',
        solution: 'Done 1!'
    }
});

app.controller("example2Ctrl", function($scope, $route) {
    $scope.example = {
        step: 'Do this 2',
        solution: 'Done 2!'
    }
});

app.controller("example3Ctrl", function($scope, $route) {
    $scope.example = {
        step: 'Do this 3',
        solution: 'Done 3!'
    }
});

app.controller("example4Ctrl", function($scope, $route) {
    $scope.example = {
        step: 'Do this 4',
        solution: 'Done 4!'
    }
});

app.controller("example5Ctrl", function($scope, $route) {
    $scope.example = {
        step: 'Do this 5',
        solution: 'Done 5!'
    }
});

app.controller("example6Ctrl", function($scope, $route) {
    $scope.example = {
        step: 'Do this 6',
        solution: 'Done 6!'
    }
});