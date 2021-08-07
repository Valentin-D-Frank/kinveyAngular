import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Kinvey } from 'kinvey-angular2-sdk';

import { AppModule } from './app/app.module';

const config: Kinvey.ClientConfig = {
  appKey: 'kid_Sy81g_f1Y',
  appSecret: 'd6983bd8748c4717b1712fc538b6d3c1'
};

Kinvey.initialize(config)
  .then(() => {
    enableProdMode();
    platformBrowserDynamic().bootstrapModule(AppModule);
  });
