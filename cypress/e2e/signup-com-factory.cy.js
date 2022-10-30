import signup from "../pages/SignupPage";
import SignupFactory from "../factories/SignupFactory";

describe("cadastro", function () {
  // beforeEach(function () {
  // 	cy.log("Chamando a fixture");
  // 	cy.fixture("deliver").then((d) => {
  // 		this.deliver = d;
  // 	});
  // });

  it("Usuario deve se tornar um entregador", function () {
    var deliver = SignupFactory.deliver();

    signup.go();
    signup.fillForm(deliver);
    signup.submit();

    var expectedMessage =
      "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.";
    signup.modalContenteShouldBe(expectedMessage);
  });

  it("CPF incorreto", function () {
    var deliver = SignupFactory.deliver();

    deliver.cpf = "0000004141z";

    var expectedMessage = "Oops! CPF inválido";
    signup.go();
    signup.fillForm(deliver);
    signup.submit();
    signup.alertMessageShouldBeVisible(expectedMessage);
  });

  it("Email error", function () {
    var deliver = SignupFactory.deliver();

    deliver.email = "papap.com";

    var expectedMessage = "Oops! Email com formato inválido.";
    signup.go();
    signup.fillForm(deliver);
    signup.submit();
    signup.alertMessageShouldBeVisible(expectedMessage);
  });

  context("Required fields", function () {
    const messages = [
      { field: "name", output: "É necessário informar o nome" },
      { field: "cpf", output: "É necessário informar o CPF" },
      { field: "email", output: "É necessário informar o email" },
      { field: "postalcode", output: "É necessário informar o CEP" },
      { field: "number", output: "É necessário informar o número do endereço" },
      { field: "delivery_method", output: "Selecione o método de entrega" },
      { field: "cnh", output: "Adicione uma foto da sua CNH" },
    ];

		before(function(){
			signup.go();
			signup.submit();

		})

		messages.forEach(function(msg){
			it(`${msg.field} is required`, function(){
				signup.alertMessageShouldBeVisible(msg.output);
			})
		})

  });

  it("Required fields", function () {
    signup.go();
    signup.submit();
    signup.alertMessageShouldBeVisible("É necessário informar o nome");
    signup.alertMessageShouldBeVisible("Adicione uma foto da sua CNH");
  });
});
