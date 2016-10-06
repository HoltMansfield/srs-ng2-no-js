import 'core-js';
import 'reflect-metadata'
import 'zone.js/dist/zone'

// we're running this app in a browser (angular is now [browser | native | universal])
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

// we bootstrap our app module
import { AppModule } from './app/app.module'

// this is where the magic happens
platformBrowserDynamic().bootstrapModule(AppModule)
