'use strict';

// Google Analytics Collection APIs Reference:
// https://developers.google.com/analytics/devguides/collection/analyticsjs/

angular.module('app.controllers', ['ui.bootstrap', 'ngAside'])

    // Path: /
    .controller('HomeCtrl', ['$scope', '$location', '$window', 'service', function ($scope, $location, $window, service) {
        $scope.$root.title = 'Gianfranco Spadoni Pittore Website';
        $scope.$on('$viewContentLoaded', function () {
            var slides = $scope.slides = [];
            $scope.myInterval = 2000;
            $scope.addSlide = function (image) {
               
                slides.push({
                    image:image.link,                      
                    text: image.title                    
                });
            };
        for (var i = 1; i < 16; i++) {
            $scope.images = service.getImages();
            if (i == 9 || i == 10) { continue };
                $scope.addSlide($scope.images[i]);
            }
            //$window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    

    // Path: /login
    .controller('LoginCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'AngularJS SPA | Sign In';
        // TODO: Authorize a user
        $scope.login = function () {
            $location.path('/');
            return false;
        };
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    // Path: /error/404
    .controller('Error404Ctrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Error 404: Page Not Found';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

      
     

   

    .controller('AsideMenuCtrl', ['$scope', '$location', '$window', '$aside', function ($scope, $location, $window, $aside) {

        $scope.asideState = {
            open: false
        };
    
        $scope.openAside = function(position, backdrop) {
            $scope.asideState = {
                open: true,
                position: position
            };
      
            function postClose() {
                $scope.asideState.open = false;
            }
      
            $aside.open({
                templateUrl: '/views/aside',
                placement: position,
                size: 'sm',
                backdrop: backdrop,
                controller: function($scope, $modalInstance) {
                    $scope.ok = function(e) {
                        $modalInstance.close();
                        e.stopPropagation();
                    };
                    $scope.cancel = function(e) {
                        $modalInstance.dismiss();
                        e.stopPropagation();
                    };
                }
            }).result.then(postClose, postClose);
        };
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
   

.controller('DetailTemplateCtrl', function ($scope, $modalInstance, items) {

    $scope.quadro = items;
    

    $scope.ok = function () {
        $modalInstance.dismiss('cancel');
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});