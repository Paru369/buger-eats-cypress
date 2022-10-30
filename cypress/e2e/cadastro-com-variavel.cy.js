import signup from "../pages/SignupPage";
import SignupFactory from "../factories/SignupFactory";

describe("cadastro", function () {
	
	

	it("Usuario deve se tornar um entregador", function () {
		
		var deliver = {
			name: 'Fernando Papito',
			cpf: '01935940562',
			email: 'papito@testmail.com',
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

		signup.go();
		signup.fillForm(deliver);
		signup.submit();

		var expectedMessage =
			"Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.";
		signup.modalContenteShouldBe(expectedMessage);
	});

	it("CPF incorreto", function () {

		var deliver = {
			name: 'Fernando Papito',
			cpf: '01935940562xx',
			email: 'papito@testmail.com',
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
			cnh: 'cnh-digital.jpg'}
		
		var expectedMessage = "Oops! CPF inválido";
		signup.go();
		signup.fillForm(deliver);
		signup.submit();
		signup.alertMessageShouldBeVisible(expectedMessage);
	});

	it("Email error", function () {

		var deliver = {
			name: 'Fernando Papito',
			cpf: '01935940562',
			email: 'papitotestmail.com',
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
			cnh: 'cnh-digital.jpg'}
		
		var expectedMessage = "Oops! Email com formato inválido.";
		signup.go();
		signup.fillForm(deliver);
		signup.submit();
		signup.alertMessageShouldBeVisible(expectedMessage);
	});
});
