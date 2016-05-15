var App;
(function (App) {
    var Views;
    (function (Views) {
        var Person;
        (function (Person) {
            //Unsere PersonList Klasse erstellen
            var PersonListCtrl = (function () {
                function PersonListCtrl() {
                    this.locals = new PersonListLocalsModel();
                    this.name = "MEIN NAME";
                    this.init();
                }
                /**
                * Initialisieren der wichtigsten lokalen Variablen
                */
                PersonListCtrl.prototype.init = function () {
                };
                Object.defineProperty(PersonListCtrl, "module", {
                    /**
                     * Stellt das aktuelle Angular Modul für den "PersonList" bereit.
                     */
                    get: function () {
                        if (this._module) {
                            return this._module;
                        }
                        //Hier die abhängigen Module für diesen controller definieren, damit brauchen wir von außen nur den Controller einbinden
                        //und müssen seine Abhängkeiten nicht wissen.
                        this._module = angular.module('personListCtrl', []);
                        this._module.controller('personListCtrl', PersonListCtrl);
                        return this._module;
                    },
                    enumerable: true,
                    configurable: true
                });
                PersonListCtrl.$inject = [];
                return PersonListCtrl;
            }());
            Person.PersonListCtrl = PersonListCtrl;
            var PersonListLocalsModel = (function () {
                function PersonListLocalsModel() {
                }
                return PersonListLocalsModel;
            }());
        })(Person = Views.Person || (Views.Person = {}));
    })(Views = App.Views || (App.Views = {}));
})(App || (App = {}));
//# sourceMappingURL=personListCtrl.js.map