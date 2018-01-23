define([
    'angular',
    'jquery',
    'IosSelect',
    'layui',
    'uiRouter',
    'config',
    'filters/filters',
    'services/services',
    'directives/directives',
    'controllers/controllers',
    'ionicAngular'],

  function (angular, uiRouter) {
    'use strict';
    var app = angular.module('app', [
      'ionic',
      'app.controllers',
      'app.directives',
      'app.services',
      'app.filters',
      'app.config',
      'ui.router']);
    return app;
  });





