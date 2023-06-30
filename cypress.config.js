const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
  
    },
    baseUrl: 'https://www.saucedemo.com',
    "$schema": "https://on.cypress.io/cypress.schema.json",
    "reporter": "cypress-multi-reporters",
    "reporterOptions": {
      "configFile": "reporter-config.json"
    }
  },
  "chromeWebSecurity": false, // this is required for saucedemo.com otherwise its not work
  "experimentalSessionAndOrigin": true,

});

