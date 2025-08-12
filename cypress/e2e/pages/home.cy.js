import '../../support/helpers/homeHelpers'
import { userData } from '../../fixtures/usersData'
import { elements } from '../../fixtures/elements'

describe('Validate home page', () => {
  it('Welcome message validate', () => {
    cy.visitPage('/')

    cy.contains('h1', 'Contact List App')
    cy.get(elements.locators.welcomeMessage).contains(elements.messages.welcomeMessage)
    cy.get(elements.locators.welcomeMessage).contains(elements.messages.apiMessage)
  })

  it('Go to sign-up page', () => {
    cy.visitPage('/')
    cy.clickButton(elements.buttons.signup)
    cy.validateUrl('addUser')
  })

  it('Do login', () => {
    cy.visitPage('/')
    cy.fillLoginFields(userData.login.email, userData.login.password)
    cy.clickButton(elements.buttons.submit)
    cy.validateUrl('contactList')
    cy.contains('h1', 'Contact List')
  })
})
