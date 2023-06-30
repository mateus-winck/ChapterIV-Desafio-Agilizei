import LoginElements from './LoginElements'

export default new class LoginPage {
  acessarPaginaDeLogin() {
    cy.visit('/')
  }
  realizarLoginValido() {
    cy.get(LoginElements.iptUsername()).type('standard_user')
    cy.get(LoginElements.iptPassword()).type('secret_sauce')
    cy.get(LoginElements.BtnLogin()).click()
  }
  verificarPaginaPosLogin() {
    cy.url().should('contain', '/inventory.html')
  }
}