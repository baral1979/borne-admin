'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');
import routes from './tools.routes';

export class ToolsComponent {

  /*@ngInject*/

  files = null;
  testValue = "";
  myModel = "private";
  myFile = {};

  constructor($scope, Upload) {
    'ngInject';

    $scope.onFileSelect = function($files) {
      //$files: an array of files selected, each file has name, size, and type.
      for (var i = 0; i < $files.length; i++) {
        var $file = $files[i];
        Upload.upload({
          url: 'uploads',
          data: {
            file: $file
          }
        }).then(function(data, status, headers, config) {
          // file is uploaded successfully
          console.log(data);
        });
      }
    }

  }
}

export default angular.module('borneAdminApp.tools', [uiRouter])
  .config(routes)
  .component('tools', {
    template: require('./tools.html'),
    controller: ToolsComponent,
    controllerAs: 'toolsCtrl'
  })
  .name;
