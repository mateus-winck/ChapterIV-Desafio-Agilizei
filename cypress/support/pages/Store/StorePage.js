import StoreElements from './StoreElements'

export default new class StorePage {
  adicionarItens() {
    cy.get(StoreElements.addBackpack()).click()
    cy.get(StoreElements.addBikelight()).click()
    cy.get(StoreElements.addRedshirt()).click()
  }
  acessarCarrinho() {
    cy.get(StoreElements.btnCarrinho()).click()
  }
}