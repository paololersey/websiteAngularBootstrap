angular.module('app.controllers').controller('GalleryCtrl', ['$scope', '$location', '$window', '$modal', 'service', function ($scope, $location, $window, $modal, service) {
    $scope.$root.title = 'Gallery page';

    $scope.openDetailDialog = function (quadro) {
        $scope.quadro = quadro;
        var modalInstance = $modal.open({
            //animation: $scope.animationsEnabled,
            templateUrl: 'detailTemplate.html',
            controller: 'DetailTemplateCtrl',
            size: 'lg',
            resolve: {
                items: function () {
                    return $scope.quadro;
                }
            }
        })
    }

    $scope.$on('$viewContentLoaded', function () {
        $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
    });

    $scope.images = service.getImages();

}])