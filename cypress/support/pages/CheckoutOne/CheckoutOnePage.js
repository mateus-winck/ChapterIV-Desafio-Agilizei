import CheckoutOneElements from "./CheckoutOneElements";

export default new class CheckoutOnePage {

    RealizarPreenchimentoValido() {
      cy.get(CheckoutOneElements.FirstName()).type('First Name Checkout')
      cy.get(CheckoutOneElements.LastName()).type('Last Name Checkout')
      cy.get(CheckoutOneElements.ZipCode()).type('96546200')
    }
    CheckoutButton() {
      cy.get(CheckoutOneElements.ContinueButton()).click()
    }
  }