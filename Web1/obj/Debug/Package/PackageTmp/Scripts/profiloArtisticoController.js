// Path: /about
angular.module('app.controllers').controller('ProfiloArtisticoCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
    $scope.$root.title = 'Profilo artistico';
    $scope.$on('$viewContentLoaded', function () {
        $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
    });
        
    $scope.images =[];
    for(var i=1;i<=6;i++){
        var image = { "description": null, "link": null };
        image.link = "Images/" + i + ".JPG";
        $scope.images.push(image);
    }

    $scope.paragrafi = [];
    $scope.paragrafo = {};
    $scope.paragrafo.title = "TEMATICHE";
    $scope.paragrafo.description = "Spadoni  Gianfranco ama i paesaggi marini, i giardini, la campagna, la natura vera e genuina, specie quella mediterranea: i paesaggi provenzali lo affascinano per i colori e per quel carattere selvaggio che emerge in ogni dove; le spiagge, le barche che riposano tra i cespugli, pronte a salpare, il bagnasciuga che si confonde con il fondale, rappresentano momenti significativi della sua pittura.";
    $scope.paragrafi.push($scope.paragrafo);

    $scope.paragrafo2 = {};
    $scope.paragrafo2.title = "ISPIRAZIONE";
    $scope.paragrafo2.description = "E’ di chiara scuola figurativa, quella esemplificata nella tradizione, motivata dalla creatività che nasce spontanea e viene spalmata di getto sulla tela.\nLe rappresentazioni di scorci di paesi rievocano immagini cariche di vitalità, rappresentano la fierezza e l’orgoglio del tempo passato.";
    $scope.paragrafi.push($scope.paragrafo2);

    $scope.paragrafo3 = {};
    $scope.paragrafo3.title = "TECNICA PITTORICA";
    $scope.paragrafo3.description = "I colori, uno dei punti di forza della pittura di Spadoni,sono in armonia con le forme, si presentano materici, appositamente studiati per evidenziare i vari aspetti della natura,sono realizzati con un lavoro di cesellatura accurata, rendendoli incisivi e vivi allo sguardo dell’osservatore\nLa vastità dell’insieme, dei panorami a perdita d’occhio, viene fissata sulla tela insieme al piccolo dettaglio con delicatezza e armonia di tinte.";
    $scope.paragrafi.push($scope.paragrafo3);

    $scope.paragrafo4 = {};
    $scope.paragrafo4.title = "RECENSIONI";
    $scope.paragrafo4.descriptionHeader = "Dalle riviste  \"ARTE\":\n\n";
    $scope.recensioni1 = "\"Orizzonti ampi, panorami vasti, che invitano a riflettere e ad abbandonarsi alla magia della vita, mistero da cogliere nella sua bellezza gioiosa…\n\n\"";
    $scope.recensioni2 = "\"I cieli ad olio tra il sereno e nuvoloso dei paesi di mare, i campi , i fiori e le barche appaiono così vivi da emozionare…\"";
    $scope.recensioni3 = "\"Nelle tele del pittore emiliano è palpabile la serenità data dalla delicatezza delle tinte, combinate per leggere le varie sfumature della natura…\n\n\"";
    $scope.paragrafo4.description = $scope.paragrafo4.descriptionHeader + $scope.recensioni1 + $scope.recensioni2 + $scope.recensioni3;
    $scope.paragrafi.push($scope.paragrafo4);



    $scope.oneAtATime = true;
    $scope.status = {
        isFirstOpen: true,
        open: true
    };

    $scope.tematiche = "";
    $scope.ispirazione = ""
    $scope.tecnica = ""
    $scope.recensioni = "Dalle riviste  \"ARTE\":";

    $scope.recensioni1="\"Orizzonti ampi, panorami vasti, che invitano a riflettere e ad abbandonarsi alla magia della vita, mistero da cogliere nella sua bellezza gioiosa…\"";
    $scope.recensioni2="\"I cieli ad olio tra il sereno e nuvoloso dei paesi di mare, i campi , i fiori e le barche appaiono così vivi da emozionare…\"";
    $scope.recensioni3="\"Nelle tele del pittore emiliano è palpabile la serenità data dalla delicatezza delle tinte, combinate per leggere le varie sfumature della natura…\"";
}])