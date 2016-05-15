module App {
    export class MainApp {
        static createApp(angular: ng.IAngularStatic) {
            //Alle Module definieren die wir verwenden.
            angular.module("app.main",
            [
                //Fremdanbieter Module
                "ui.bootstrap",
                //Eigene Module einbinden
                //Module die mit TypeScript geschrieben wurden einbinden
                Views.Person.PersonListCtrl.module.name,
            ])
            /*.config([
                "$stateProvider", "$urlRouterProvider","$locationProvider", ($stateProvider : ng.ui.IStateProvider, $urlRouterProvider : ng.ui.IUrlRouterProvider, $locationProvider: ng.ILocationProvider) => {
                    return new Config.RouteConfig($stateProvider, $urlRouterProvider, $locationProvider);
                }
            ])*/
        }
    }
}

//Unsere Anwendung intial aufrufen/starten
App.MainApp.createApp(angular);

