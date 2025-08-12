import { elements } from '../../fixtures/elements'

Cypress.Commands.add('fillLoginFields', (email, password) => {
  cy.get(elements.fields.email).type(email)
  cy.get(elements.fields.password).type(password)
})
