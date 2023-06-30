import CheckoutTwoElements from "./CheckoutTwoElements";
import Products from '../fixtures/Products.json'

export default new class CheckoutTwoPage {

    ValidarProdutosCheckout() {
      cy.get(CheckoutTwoElements.FirstItemName()).should('contain', Products.Products[0].item_name)
      cy.get(CheckoutTwoElements.SecondItemName()).should('contain', Products.Products[1].item_name)
      cy.get(CheckoutTwoElements.ThirdItemName()).should('contain', Products.Products[2].item_name)
      cy.get(CheckoutTwoElements.TotalItem()).should('contain', Products.TotalItem)
      cy.get(CheckoutTwoElements.TotalTax()).should('contain', Products.TotalTax)
      cy.get(CheckoutTwoElements.Total()).should('contain', Products.Total)
    }
    FinalizarCompra() {
      cy.get(CheckoutTwoElements.BtnFinish()).click()
      cy.url().should('contain', '/checkout-complete.html')
      cy.get(CheckoutTwoElements.FinishMessage()).should('contain', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')
    }
  }