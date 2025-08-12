import '../../support/helpers/contactListHelpers'
import { userData } from '../../fixtures/usersData'
import { elements } from '../../fixtures/elements'

describe('Validate contact list page and your functions', () => {
  it('Add new contact', () => {
    cy.doLogin()
    cy.clickButton(elements.buttons.addContact)
    cy.get(elements.fields.firstName).type(userData.newContact.firstName)
    cy.get(elements.fields.lastName).type(userData.newContact.lastName)
    cy.get(elements.fields.birthDate).type(userData.newContact.birthDate)
    cy.get(elements.fields.email).type(userData.newContact.email)
    cy.get(elements.fields.phone).type(userData.newContact.phone)
    cy.get(elements.fields.streetOne).type(userData.newContact.streetOne)
    cy.get(elements.fields.streetTwo).type(userData.newContact.streetTwo)
    cy.get(elements.fields.city).type(userData.newContact.city)
    cy.get(elements.fields.state).type(userData.newContact.state)
    cy.get(elements.fields.postalCode).type(userData.newContact.postalCode)
    cy.get(elements.fields.country).type(userData.newContact.country)
    cy.clickButton(elements.buttons.submit)
    cy.get(elements.locators.contactListTable)
      .find(elements.locators.contactListRow)
      .contains('td', userData.newContact.streetTwo)
  })

  it('Edit new contact', () => {
    cy.doLogin()
    cy.get(elements.locators.contactListTable).find(elements.locators.contactListRow).click()
    cy.clickButton(elements.buttons.editContact)
    cy.contains('h1', 'Edit Contact').should('be.visible')
    cy.get(elements.fields.firstName).should('be.visible').and('have.value', userData.newContact.firstName)
    cy.get(elements.fields.firstName).clear()
    cy.get(elements.fields.firstName).type(userData.newContact.editedName)
    cy.clickButton(elements.buttons.submit)
    cy.clickButton(elements.buttons.return)
    cy.get(elements.locators.contactListTable)
      .find(elements.locators.contactListRow)
      .contains('td', userData.newContact.editedName)
  })

  it('Delete contact', () => {
    cy.doLogin()
    cy.get(elements.locators.contactListTable).find(elements.locators.contactListRow).click()
    cy.clickButton(elements.buttons.deleteContact)
    cy.contains('h1', 'Contact List').should('be.visible')
    cy.get(elements.locators.contactListTable).should('not.exist')
  })
})
