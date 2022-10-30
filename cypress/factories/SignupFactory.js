var faker = require('faker/locale/pt_BR')
var cpf = require('gerador-validador-cpf')


export default {

deliver: function(){

  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();

  var data = {
    name: `${firstName} ${lastName}`,
    cpf: cpf.generate(),
		email: faker.internet.email(firstName),
		whatsapp:'7199665588',
		address: {
        postalcode: '04534011',
        street: 'Rua Joaquim Floriano',
        number: '1000',
        details: 'centro',
        district: 'Itaim Bibi',
        city_state: 'São Paulo/SP'
		},
		delivery_method: 'Moto',
		cnh: 'cnh-digital.jpg'
  }

  return data
}



}