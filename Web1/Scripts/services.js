'use strict';
'use strict';

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('app.services',[])
    .factory("service", function () {
        return {
            getImages: function () {
                var images = [];
                for (var i = 1; i <= 16; i++) {
                    var image = {};
                    image.link = "Images/" + i + ".JPG";
                    image.number = i;
                    if (i == 1) image.title = "Baia - Olio su tela , cm. 70 x 100";
                    if (i == 2) image.title = "Barca al tramonto - Olio su tela , cm. 70 x 100";
                    if (i == 3) image.title = "Aurora sul mare - Olio su tela , cm. 50 x 100";
                    if (i == 4) image.title = "Venezia - Olio su tela , cm. 70 x 70";
                    if (i == 5) image.title = "Borgo 5 Terre - Olio su tela , cm. 40 x 60";
                    if (i == 6) image.title = "Sdraio - Olio su tela , cm. 50 x 50";
                    if (i == 7) image.title = "Barca nel porto - Olio su tela , cm. 40 x 50";
                    if (i == 8) image.title = "Vita agreste - Olio su tela , cm. 70 x 100";
                    if (i == 9) image.title = "Barca al molo - Olio su tela , cm. 40 x 50";
                    if (i == 10) image.title = "Paesaggio provenzale - Olio su tela , cm. 100 x 80";
                    if (i == 11) image.title = "Tramonto con barche - Olio su tela , cm. 60 x 100";
                    if (i == 12) image.title = "Nevicata al mare - Olio su tela , cm. 70 x 100";
                    if (i == 13) image.title = "Vendita pesce - Olio su tela , cm. 40 x 60";
                    if (i == 14) image.title = "Paesaggio con barche - Olio su tela , cm. 60 x 70";
                    if (i == 15) image.title = "La pergola - Olio su tela , cm. 70 x 100";
                    if (i == 16) image.title = "Baia con papaveri - Olio su tela , cm. 70 x 100";

                    images.push(image);                   
                }
                return images;


            }
        }
    });
    