"use strict";
var upgrade_1 = require('@angular/upgrade');
var appModule_1 = require('./appModule');
//Den Upgrade Adapter bereitstellen, damit dieser überall verwendet werden kann.
exports.upgradeAdapter = new upgrade_1.UpgradeAdapter(appModule_1.AppModule);
//# sourceMappingURL=upgradeAdapter.js.map