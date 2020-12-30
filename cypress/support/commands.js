// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("SearchPlatsRecordedSince", (d) => {
    var s = d.toLocaleDateString("en-US")
    cy.visit('/DocKoiForm.asp')
    cy.get('input[name=avKoi]').should('be.visible').type('S PLAT')
    cy.get('input[name=avEntryDate]').should('be.visible').type(s).type('{enter}')
    cy.get('input[name=Submit]').click()
})