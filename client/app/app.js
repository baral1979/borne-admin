'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import 'angular-socket-io';

import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import 'angular-validation-match';

import {
  routeConfig
} from './app.config';

import _Auth from '../components/auth/auth.module';
import account from './account';
import admin from './admin';
import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';
import tools from './tools/tools.component';
import main from './main/main.component';
import products from './products/products.component';
import constants from './app.constants';
import util from '../components/util/util.module';
import socket from '../components/socket/socket.service';
import modal from '../components/modal/modal.service';
var ngFileUpload = require('ng-file-upload');

import './app.scss';

angular.module('borneAdminApp', [ngCookies, ngResource, ngSanitize, 'btford.socket-io', uiRouter, 
  uiBootstrap, _Auth, account, admin, 'validation.match', navbar, footer,  main, products, tools, constants,
  socket, util, modal, ngFileUpload
])
  .config(routeConfig)
  .run(function($rootScope, $location, Auth) {
    'ngInject';
    // Redirect to login if route requires auth and you're not logged in

    $rootScope.$on('$stateChangeStart', function(event, next) {
      Auth.isLoggedIn(function(loggedIn) {
        if(next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  });

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['borneAdminApp'], {
      strictDi: true
    });
  });
