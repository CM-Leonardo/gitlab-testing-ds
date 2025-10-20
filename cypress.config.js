const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'eqq1vc',
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    baseUrl: 'http://localhost',
  },
   video: false,
});
