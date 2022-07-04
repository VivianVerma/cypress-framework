class basePage{

  static setMobileViewport() {
    cy.viewport('iphone-x')
  }

  static setDesktopViewport(){
    cy.viewport('macbook-15')
  }

  static set1080Viewport(){
    cy.viewport(1920,1080)
  }
}

export default basePage