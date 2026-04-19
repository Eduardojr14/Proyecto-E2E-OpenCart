const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://opencart.abstracta.us/",
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotOnRunFailure: true,
    pageLoadTimeout: 120000,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // Aquí puedes agregar plugins si los necesitas
    },
  },
});
