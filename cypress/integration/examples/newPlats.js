/// <reference types="cypress"/>

context('new plats', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
      })
        cy.visit('/DocKoiForm.asp')
    })

    it('go to webpage', () => {
        cy.get('input[name=avKoi]').should('be.visible').type('S PLAT')
        cy.get('input[name=avEntryDate]').should('be.visible').type('11/01/2020{enter}')
        cy.get('input[name=Submit]').click()
    });
});