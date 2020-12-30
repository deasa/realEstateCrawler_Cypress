/// <reference types="cypress"/>

context('new plats', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })

    it('download latest recorded plats', () => {
        var d = new Date()
        d.setMonth(d.getMonth() - 1);
        cy.SearchPlatsRecordedSince(d)
    });
});