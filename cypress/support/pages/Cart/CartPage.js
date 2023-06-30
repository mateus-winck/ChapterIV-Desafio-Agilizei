import CartElements from './CartElements'
import Products from '../fixtures/Products.json'

export default new class CartPage {

  ValidarMochilaCarrinho() {
    cy.get(CartElements.FirstItem()).should('contain', Products.Products[0].item_name)
  }
  ValidarLuzBikeCarrinho() {
    cy.get(CartElements.SecondItem()).should('contain', Products.Products[1].item_name)
  }
  ValidarCamisetaCarrinho() {
    cy.get(CartElements.ThirdItem()).should('contain', Products.Products[2].item_name)
  }
  ValidarQuantidadeItensCarrinho() {
    cy.get(CartElements.CartItensQuantity()).should('have.text', '3')
  }
  NavegarPaginaCheckout() {
    cy.get(CartElements.CheckoutButton()).click()
    cy.url().should('contain', '/checkout-step-one.html')
  }
}