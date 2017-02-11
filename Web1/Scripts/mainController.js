angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('CarouselDemoCtrl', function ($scope) {
  var slides = $scope.slides = [];
  $scope.myInterval = 2000;
  $scope.addSlide = function(i) {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: '../resources/img/'+i+'.JPG',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=1; i<6; i++) {
    $scope.addSlide(i);
  }
});