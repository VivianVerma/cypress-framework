import { defineConfig } from 'cypress'

export default defineConfig({
	reporter: 'cypress-mochawesome-reporter',
	reporterOptions: {
		reportDir: 'cypress/reports',
		charts: true,
		reportPageTitle: 'Cypress',
		embeddedScreenshots: true,
		inlineAssets: true,
		json: true,
		html: true,
	},
	video: true,
	defaultCommandTimeout: 30000,
	pageLoadTimeout: 40000,
	requestTimeout: 20000,
	responseTimeout: 20000,
	chromeWebSecurity: false,
	watchForFileChanges: false,
	e2e: {
		setupNodeEvents(on, config) {
			return require('./cypress/plugins/index.js')(on, config)
		},
		baseUrl: 'https://www.google.com/',
		specPattern: 'cypress/e2e/tests/*.{js,jsx,ts,tsx}',
	},
})
