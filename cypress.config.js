const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  video: true,
  screenshotOnRunFailure: true,
  chromeWebSecurity: false,

  // Configuración del Reportero (Fuera de e2e)
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "reports/mochawesome", // Carpeta donde se guardarán
    overwrite: false,
    html: false, // Se recomienda false para luego unirlos todos en uno solo
    json: true,
    //reportFilename: "report" 
  },

  e2e: {
    baseUrl: "https://opencart.abstracta.us/",
    pageLoadTimeout: 120000,
    setupNodeEvents(on, config) {
      // Implementar listeners aquí si es necesario
      return config;
    },
  },
});