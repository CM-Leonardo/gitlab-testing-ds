const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'eqq1vc',
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    baseUrl: 'http://localhost',
  },
   env: {
      hideCredentials: true,
      requestMode: true,
    },
   video: false,
});
