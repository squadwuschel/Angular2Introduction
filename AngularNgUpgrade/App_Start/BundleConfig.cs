using System.Web;
using System.Web.Optimization;

namespace AngularNgUpgrade
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                        "~/Scripts/jquery-{version}.js",
                        "~/Scripts/angular.js",
                        "~/Scripts/angular-sanitize.js",
                        "~/Scripts/angular-ui/ui-bootstrap-tpls.js"
                        ));


            bundles.Add(new ScriptBundle("~/bundles/angularApp").Include(
                        "~/ScriptsApp/Views/Person/personListCtrl.js",
                        "~/ScriptsApp/Views/mainApp.js"
                        ));



            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
        }
    }
}
