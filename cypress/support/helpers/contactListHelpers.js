import { elements } from '../../fixtures/elements'
import { userData } from '../../fixtures/usersData'
import '../helpers/homeHelpers'

Cypress.Commands.add('doLogin', () => {
  cy.visitPage('/')
  cy.fillLoginFields(userData.login.email, userData.login.password)
  cy.clickButton(elements.buttons.submit)
})
