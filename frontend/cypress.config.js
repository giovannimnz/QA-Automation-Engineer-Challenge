const { defineConfig } = require("cypress");
const fs = require("fs");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 60000,
    pageLoadTimeout: 300000,
    requestTimeout: 60000,
    responseTimeout: 30000,
    baseUrl: 'https://demoqa.com',
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}"
  },
})