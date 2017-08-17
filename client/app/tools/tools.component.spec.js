'use strict';

describe('Component: ToolsComponent', function() {
  // load the controller's module
  beforeEach(module('borneAdminApp.tools'));

  var ToolsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ToolsComponent = $componentController('tools', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
