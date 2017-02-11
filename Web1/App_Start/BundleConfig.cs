// --------------------------------------------------------------------------------------------------------------------
// <copyright file="BundleConfig.cs" company="">
//   Copyright © 2015 
// </copyright>
// --------------------------------------------------------------------------------------------------------------------

namespace App.Web1
{
    using System.Web;
    using System.Web.Optimization;

    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/Content/css/app").Include(
                
                "~/Content/bootstrap/css/bootstrap.css",
                "~/Content/angular-aside.css",
                "~/Content/app.css"
                ));

            bundles.Add(new ScriptBundle("~/js/jquery").Include("~/scripts/vendor/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/Scripts/app").Include(
              /*  "~/Scripts/vendor/jquery-2.0.3.min.js",
                "~/Scripts/vendor/angular.min.js",*/
                "~/Scripts/vendor/angular-ui-router.js",
                "~/Scripts/vendor/ang-ui-bootstrap/ui-bootstrap-tpls-0.11.0.min.js",
                 "~/Scripts/vendor/angular-aside.js",
                "~/Scripts/filters.js",
                "~/Scripts/services.js",
                "~/Scripts/directives.js",
                "~/Scripts/controllers.js",
                "~/Scripts/galleryController.js",
                "~/Scripts/galleryCostumeSocietaController.js",
                "~/Scripts/profiloArtisticoController.js",
                "~/Scripts/mostreController.js",
                "~/Scripts/app.js"));
        }
    }
}
