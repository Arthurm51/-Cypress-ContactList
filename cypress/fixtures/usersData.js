import { faker } from '@faker-js/faker'

export const userData = {
  register: {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: 'pswd123'
  },

  login: {
    email: 'testearthurmachadoqa@gmail.com',
    password: 'teste123'
  },

  newContact: {
    firstName: 'Arthur',
    lastName: 'Machado',
    birthDate: '2001-09-27',
    email: 'testeemail@gmail.com',
    phone: '54999335048',
    streetOne: 'Rua dos testes',
    streetTwo: 'Esquina com a automacao',
    city: 'Passo Fundo',
    state: 'Rio Grande do Sul',
    postalCode: '99022-006',
    country: 'Brasil',
    editedName: 'Edicao do Arthur'
  }
}
