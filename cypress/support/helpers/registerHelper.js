import { elements } from '../../fixtures/elements'

Cypress.Commands.add('fillFieldsRegisterNewAccount', (firstName, lastName, email, password) => {
  cy.get(elements.fields.firstName).should('have.attr', 'placeholder', 'First Name').type(firstName)
  cy.get(elements.fields.lastName).should('have.attr', 'placeholder', 'Last Name').type(lastName)
  cy.get(elements.fields.email).should('have.attr', 'placeholder', 'Email').type(email)
  cy.get(elements.fields.password).should('have.attr', 'placeholder', 'Password').type(password)
})

Cypress.Commands.add('validateErrorMessage', message => {
  cy.get(elements.locators.errorMessages).contains(message)
})
