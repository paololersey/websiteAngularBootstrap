// Path: /profiloArtistico
angular.module('app.controllers').controller('ProfiloArtisticoCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
    $scope.$root.title = 'Profilo artistico';
    $scope.$on('$viewContentLoaded', function () {
        $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
    });
        
    $scope.images =[];
    for(var i=1;i<=9;i++){
        var image = { "description": null, "link": null };
        image.link = "Images/" + i + ".JPG";
        $scope.images.push(image);
    }

    $scope.presentazioni = [];
    $scope.presentazione = {};
    $scope.presentazione.title = "PRESENTAZIONE";
    $scope.presentazione.description = "Gianfranco Spadoni, con i suoi paesaggi e giardini, che siano provenzali o mediterranei, è capace di parlare agli occhi del pubblico, rendendoli incisivi e vivi, allo sguardo dell’osservatore. I colori, uno dei punti di forza della pittura di Spadoni, sono sposaticon le forme, e si presentano materici, appositamente studiati per evidenziare i vari aspetti della natura con un lavoro di cesellatura accurato; anche se assente l’elemento umano, è presente in maniera indiretta, evocato da barche, scorci di case, pergolati, espressione di una pacata operosità che ben si intona ai cicli della natura. La vastità dei panorami a perdita d’occhio viene fissata su tela, insieme al piccolo dettaglio con delicatezza e armonia di tinte. Inoltre, ama decisamente cogliere l’immediatezza dell’ espressione che traspare su un volto, riprenderne il particolare in un istante fuggente;dunque, all’interno della sua produzione, si ritaglia dei momenti per eseguire ritratti su commessa. Il pittore Spadoni ha esposto a Bologna, Ferrara, e provincia; inoltre, sulla riviera ligure, in località quali Lerici, Sestri Levante, Spotorno, e sull’appennino tosco emiliano, a Sestola, Pievepelago, Fiumalbo, oltre ad altre località minori.";
    $scope.presentazioni.push($scope.presentazione);

    $scope.contatti = {};
    $scope.contatti.title = "CONTATTI";
    $scope.contatti.description = "il pittore Gianfranco Spadoni vive e lavora ad Altedo(BO), in via Nazionale 158. Contatto telefonico: 333 2168704.";
    $scope.presentazioni.push($scope.contatti);

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
        open: true,
        openfirst: true
    };

    $scope.tematiche = "";
    $scope.ispirazione = ""
    $scope.tecnica = ""
    $scope.recensioni = "Dalle riviste  \"ARTE\":";

    $scope.recensioni1="\"Orizzonti ampi, panorami vasti, che invitano a riflettere e ad abbandonarsi alla magia della vita, mistero da cogliere nella sua bellezza gioiosa…\"";
    $scope.recensioni2="\"I cieli ad olio tra il sereno e nuvoloso dei paesi di mare, i campi , i fiori e le barche appaiono così vivi da emozionare…\"";
    $scope.recensioni3="\"Nelle tele del pittore emiliano è palpabile la serenità data dalla delicatezza delle tinte, combinate per leggere le varie sfumature della natura…\"";
}])