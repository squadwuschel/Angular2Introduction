module App.Views.Person {

    //Alle Variablen für unseren Controller im Interface definieren
    export interface IPersonListCtrl {
        //Locals
        //viewModel: My.;
        //Functions
    }

    //Unsere PersonList Klasse erstellen
    export class PersonListCtrl implements IPersonListCtrl {
        private locals: PersonListLocalsModel = new PersonListLocalsModel();
        public name = "MEIN NAME";
        static $inject: string[] = [
        ];

        constructor() {
            this.init();
        }

        /**
        * Initialisieren der wichtigsten lokalen Variablen
        */
        private init(): void {
        }


        //#region Angular Module Definition
        private static _module: ng.IModule;

        /**
         * Stellt das aktuelle Angular Modul für den "PersonList" bereit.
         */
        public static get module(): ng.IModule {
            if (this._module) {
                return this._module;
            }

            //Hier die abhängigen Module für diesen controller definieren, damit brauchen wir von außen nur den Controller einbinden
            //und müssen seine Abhängkeiten nicht wissen.
            this._module = angular.module('personListCtrl', []);
            this._module.controller('personListCtrl', PersonListCtrl);
            return this._module;
        }

        //#endregion
    }

    class PersonListLocalsModel {
    }

} 