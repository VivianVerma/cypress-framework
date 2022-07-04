/// <reference types='cypress' />
///<reference types="cypress-iframe" />
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin')
const tagify = require('cypress-tags')
/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
	on('file:preprocessor', tagify(config))
	require('cypress-mochawesome-reporter/plugin')(on)
	addMatchImageSnapshotPlugin(on, config)
}
