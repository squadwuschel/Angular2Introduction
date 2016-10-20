import { UpgradeAdapter } from '@angular/upgrade';
import { AppModule } from './appModule';

//Den Upgrade Adapter bereitstellen, damit dieser überall verwendet werden kann.
export const upgradeAdapter = new UpgradeAdapter(AppModule);