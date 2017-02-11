angular.module('app.controllers').controller('GallerySocietaCostumeCtrl', ['$scope', '$location', '$window', '$modal', function ($scope, $location, $window, $modal) {
    $scope.$root.title = 'Gallery Societa Costume  page';

    $scope.openDetailDialog = function (quadro) {
        $scope.quadro = quadro;
        var modalInstance = $modal.open({
            //animation: $scope.animationsEnabled,
            templateUrl: 'detailTemplateCostumeSocieta.html',
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

    $scope.images = [];
    for (var i = 1; i <= 4; i++) {
        var image = { "number": null, "link": null };
        image.link = "Images/CostumeSocieta/" + i + ".JPG";
        image.number = i;
        if (i == 1) {
            image.title = "Il pescatore";
            image.description = "Uno spaccato della vita di un pescatore realizzato con la pacatezza dei colori e l’armoniosità delle forme.";
        }
        if (i == 2) {
            image.title = "Il clochard";
            image.description = "Il problema dell’emarginazione emerge in modo netto da questo clochard, rappresen"+
            "tato comunque senza drammaticità; è immerso in un clima di serenità e pace, a testimo"+
            "nianza che ogni stagione della vita può avere la sua bellezza.";
        }
        if (i ==3) {
            image.title = "Il taglialegna";
            image.description = "Il movimento armonico dello spaccalegna suggerisce racconti affascinanti che "+
            "evocano sensazioni e memorie reali del nostro recente passato.";
        }
        if (i == 4) {
            image.title = "Il gioco";
            image.description = "Questo mondo è rappresentato con accentuazione del colore, per sottolineare"+
            "la sensazione di piacere e di euforia che può produrre; lo sguardo addolorato"+
            "del volto femminile è un monito a non farsi travolgere da questa affascinante spirale.";
        }
            
        $scope.images.push(image);
    }

}])