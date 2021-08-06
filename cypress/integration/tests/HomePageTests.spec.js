beforeEach(() => {
    cy.visit('https://autodemo.testoneo.com/en/')
})

it('should test: application title', () => {
    cy.title().should('eq', 'Lost Hat')
})

it('should test: CLOTHES menu option', () => {
    cy.get('#category-3').click()
    cy.url().should('eq', 'https://autodemo.testoneo.com/en/3-clothes')
})

it('should test: ACCESSORIES menu option', () => {
    cy.get('#category-6').click()
    cy.url().should('eq', 'https://autodemo.testoneo.com/en/6-accessories')
})

it('should test: ACCESSORIES menu option', () => {
    cy.get('#category-9').click()
    cy.url().should('eq', 'https://autodemo.testoneo.com/en/9-art')
})

it('should test: slider size', () => {
    cy.get('.carousel-item').should('have.length', 3)
})