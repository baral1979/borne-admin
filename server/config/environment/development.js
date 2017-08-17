'use strict';
/*eslint no-process-env:0*/

// Development specific configuration
// ==================================
module.exports = {
  port: 3000,
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/borneadmin-dev'
  },

  // Seed database on startup
  seedDB: true

};
