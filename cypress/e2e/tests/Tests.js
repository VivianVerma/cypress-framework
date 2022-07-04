import TestsPage from '../pages/TestsPage'

let testData
//access fixture data
before(() => {
	cy.fixture('testdata').then($testdata => {
		testData = $testdata
	})
})

describe('Tests', () => {
	it('Search', () => {
		TestsPage.search(testData)
	})
})
