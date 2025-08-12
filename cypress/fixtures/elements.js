export const elements = {
  buttons: {
    submit: '#submit',
    signup: '#signup',
    addContact: '#add-contact',
    editContact: '#edit-contact',
    deleteContact: '#delete',
    return: '#return'
  },

  fields: {
    firstName: '#firstName',
    lastName: '#lastName',
    email: '#email',
    password: '#password',
    birthDate: '#birthdate',
    phone: '#phone',
    streetOne: '#street1',
    streetTwo: '#street2',
    city: '#city',
    state: '#stateProvince',
    postalCode: '#postalCode',
    country: '#country'
  },

  messages: {
    welcomeMessage: 'Welcome! This application is for testing purposes only',
    apiMessage: 'The API documentation can be found',
    errorMessages: {
      firstName: 'User validation failed: firstName: Path `firstName` is required.',
      lastName: 'User validation failed: lastName: Path `lastName` is required.',
      email: 'User validation failed: email: Email is invalid',
      password:
        'User validation failed: password: Path `password` (`abc12`) is shorter than the minimum allowed length (7).'
    }
  },

  locators: {
    welcomeMessage: '.welcome-message',
    errorMessages: '#error',
    contactListTable: '#myTable',
    contactListRow: '.contactTableBodyRow'
  }
}
