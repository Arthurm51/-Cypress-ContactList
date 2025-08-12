import '../../support/helpers/registerHelper'
import '../../fixtures/usersData'
import '../../fixtures/elements'
import { userData } from '../../fixtures/usersData'
import { elements } from '../../fixtures/elements'

describe('Validate register page and your functions', () => {
  it('Register page title', () => {
    cy.visitPage('addUser')

    cy.contains('h1', 'Add User')
  })

  it('Register a new user', () => {
    cy.visitPage('addUser')

    cy.fillFieldsRegisterNewAccount(
      userData.register.firstName,
      userData.register.lastName,
      userData.register.email,
      userData.register.password
    )

    cy.clickButton(elements.buttons.submit)

    cy.validateUrl('contactList')
    cy.contains('h1', 'Contact List')
  })

  it('Attempt to register a new user without first name', () => {
    cy.visitPage('addUser')

    cy.fillFieldsRegisterNewAccount(' ', userData.register.lastName, userData.login.email, userData.register.password)
    cy.clickButton(elements.buttons.submit)
    cy.validateErrorMessage(elements.messages.errorMessages.firstName)
  })

  it('Attempt to register a new user without last name', () => {
    cy.visitPage('addUser')

    cy.fillFieldsRegisterNewAccount(userData.register.firstName, ' ', userData.login.email, userData.register.password)
    cy.clickButton(elements.buttons.submit)
    cy.validateErrorMessage(elements.messages.errorMessages.lastName)
  })

  it('Attempt to register a new user with invalid email', () => {
    cy.visitPage('addUser')

    cy.fillFieldsRegisterNewAccount(
      userData.register.firstName,
      userData.register.lastName,
      'sadsa@gmail',
      userData.register.password
    )
    cy.clickButton(elements.buttons.submit)
    cy.validateErrorMessage(elements.messages.errorMessages.email)
  })

  it('Attempt to register a new user with invalid password', () => {
    cy.visitPage('addUser')

    cy.fillFieldsRegisterNewAccount(
      userData.register.firstName,
      userData.register.lastName,
      userData.login.email,
      'abc12'
    )
    cy.clickButton(elements.buttons.submit)
    cy.validateErrorMessage(elements.messages.errorMessages.password)
  })
})
