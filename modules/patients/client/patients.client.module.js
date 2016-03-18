(function (app) {
  'use strict';

  app.registerModule('patients', ['core']);// The core module is required for special route handling; see /core/client/config/core.client.routes
  app.registerModule('patients.services');
  app.registerModule('patients.routes', ['ui.router', 'patients.services']);
}(ApplicationConfiguration));
