describe('home page', () => {
  
  it('app deve estar on line', () => {
    
    cy.visit('/')


    cy.get('#page-home main h1').should('be.visible')

  }) 

})