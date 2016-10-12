import { UpgradeAdapter } from '@angular/upgrade';
import { AppModule } from './appModule';

export const upgradeAdapter = new UpgradeAdapter(AppModule);