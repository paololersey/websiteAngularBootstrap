angular.module('app.controllers').controller('MostreCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
    $scope.$root.title = 'Mostre';
    $scope.$on('$viewContentLoaded', function () {
        $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
    });
    $scope.mostre = [];
    var mostra1={};
    mostra1.title="Mostra Casinalbo Modena";
    mostra1.description = "La mostra ad ingresso libero è allestita e presentata da Barbara Ghisi presso la villa del Club La Meridiana di Casinalbo di Modena, inaugurata sabato 26 Settembre 2015 per un mese intero fino al 25 ottobre.\nOltre cinquanta opere tra dipinti su carta, tela e tavola, sculture terracotta e ferro lavorato testimoniano, nella mostra \"Altra natura in villa\", il desiderio di 6 artisti di esprimersi con un proprio linguaggio.\nTra questi spicca Il pittore Gianfranco Spadoni nato a Castellarano di Reggio Emilia, vive e lavora ad Altedo nel bolognese da anni. Con tele, colori e pennelli racconta la seduzione del paesaggio. Con i suoi giardini provenzali o mediterranei, le campagne e le marine dove affiorano le memorie del tempo nelle figure dei pescatori e delle loro barche, raffigura la gioia di vivere. L'artista è già conosciuto a Sestola sull'appennino modenese dove da tanti anni espone le sue opere, come anche a Lerici in Liguria, a Sestri Levante e a Ferrara."
    mostra1.data="Ottobre 2015";

    var mostra2 = {};
    mostra2.title="Zola Predosa (BO)";
    mostra2.description="Centro Falcone";
    mostra2.data="Maggio 2014";

    var mostra3 = {};
    mostra3.title="Malalbergo (BO)";
    mostra3.description="Palazzo Marescalchi";
    mostra3.data="Novembre 2012";



    $scope.mostre.push(mostra1);
    $scope.mostre.push(mostra2);
    $scope.mostre.push(mostra3);


    $scope.oneAtATime = true;
    $scope.status = {
        isFirstOpen: true,
        open:true
    };
    $scope.images = [];
    for (var i = 1; i <= 6; i++) {
        var image = { "description": null, "link": null };
        image.link = "Images/" + i + ".JPG";
        $scope.images.push(image);
    }
}])
