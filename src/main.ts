import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

// This is the main entry point for the Angular application
// It bootstraps the AppComponent directly (standalone approach)

if (environment.production) {
  enableProdMode(); // Enables production mode optimizations
}

bootstrapApplication(AppComponent) // Bootstraps the standalone AppComponent
  .catch((err) => console.error(err)); // Handles any bootstrap errors
