import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command'
import 'cypress-file-upload'
import 'cypress-iframe'

addMatchImageSnapshotCommand({
	failureTreshold: 0.0,
	failureTresholdType: 'percent',
	customDiffConfig: { treshold: 0.0 },
	capture: 'viewport',
})

Cypress.Commands.add('setResolution', size => {
	if (Cypress._.isArray(size)) {
		cy.viewport(size[0], size[1])
	} else {
		cy.viewport(size)
	}
})
