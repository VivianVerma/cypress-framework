const URL = '/'
import basePage from '../util/BasePage'

const SEARCH_XPATH = "//input[@title='Search']"

class TestsPage extends basePage {
	static search(testData) {
		this.set1080Viewport()
		cy.visit('/')
		cy.xpath(SEARCH_XPATH)
			.should('be.visible')
			.type(testData.name + '{enter}')
	}
}
export default TestsPage
