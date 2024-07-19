const { defineConfig } = require("Cypress");

module.exports = defineConfig({
  "chromeWebSecurity": false,
  video: true,
  videoCompression: 32,
  videoUploadOnPasses: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
   
  },
});
