var App;
(function (App) {
    var MainApp = (function () {
        function MainApp() {
        }
        MainApp.createApp = function (angular) {
            //Alle Module definieren die wir verwenden.
            angular.module("app.main", [
                //Fremdanbieter Module
                "ui.bootstrap",
                //Eigene Module einbinden
                //Module die mit TypeScript geschrieben wurden einbinden
                App.Views.Person.PersonListCtrl.module.name,
            ]);
            /*.config([
                "$stateProvider", "$urlRouterProvider","$locationProvider", ($stateProvider : ng.ui.IStateProvider, $urlRouterProvider : ng.ui.IUrlRouterProvider, $locationProvider: ng.ILocationProvider) => {
                    return new Config.RouteConfig($stateProvider, $urlRouterProvider, $locationProvider);
                }
            ])*/
        };
        return MainApp;
    }());
    App.MainApp = MainApp;
})(App || (App = {}));
//Unsere Anwendung intial aufrufen/starten
App.MainApp.createApp(angular);
//# sourceMappingURL=mainApp.js.map