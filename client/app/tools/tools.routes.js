'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('tools', {
      url: '/tools',
      template: '<tools></tools>'
    });
}
