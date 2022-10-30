import signup from "../pages/SignupPage";
import SignupFactory from "../factories/SignupFactory";

describe("cadastro", function () {
	
	beforeEach(function () {
		cy.log("Chamando a fixture");
		cy.fixture("deliver").then((d) => {
			this.deliver = d;
		});
	});

	it("Usuario deve se tornar um entregador", function () {
		
		

		signup.go();
		signup.fillForm(this.deliver.signup);
		signup.submit();

		var expectedMessage =
			"Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.";
		signup.modalContenteShouldBe(expectedMessage);
	});

	it("CPF incorreto", function () {
		
		var expectedMessage = "Oops! CPF inválido";
		signup.go();
		signup.fillForm(this.deliver.cpf_inv);
		signup.submit();
		signup.alertMessageShouldBeVisible(expectedMessage);
	});

	it("Email error", function () {
		
		var expectedMessage = "Oops! Email com formato inválido.";
		signup.go();
		signup.fillForm(this.deliver.email_inv);
		signup.submit();
		signup.alertMessageShouldBeVisible(expectedMessage);
	});
});
