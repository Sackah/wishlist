import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// import { defineCustomElements } from 'sam-web-components/loader/index';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
// defineCustomElements(window);
