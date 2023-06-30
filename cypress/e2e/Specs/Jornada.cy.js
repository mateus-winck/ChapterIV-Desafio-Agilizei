/// <reference types="cypress" />

import CartPage from '../../support/pages/Cart/CartPage'
import LoginPage from '../../support/pages/Login/LoginPage'
import StorePage from '../../support/pages/Store/StorePage'
import CheckoutOnePage from '../../support/pages/CheckoutOne/CheckoutOnePage'
import CheckoutTwoPage from '../../support/pages/CheckoutTwo/CheckoutTwoPage'

 beforeEach(() => {
   LoginPage.acessarPaginaDeLogin()
   LoginPage.realizarLoginValido()
 })


describe('Jornada de Compra do Usuário', () => {
  it('Efetua login no site', () => {
    LoginPage.verificarPaginaPosLogin()
  })
  it('Adiciona produtos e navega para o carrinho', () => {
    StorePage.adicionarItens()
    StorePage.acessarCarrinho()
    CartPage.ValidarMochilaCarrinho()
    CartPage.ValidarLuzBikeCarrinho()
    CartPage.ValidarCamisetaCarrinho()
    CartPage.ValidarQuantidadeItensCarrinho()
  })
  it('Adiciona produtos e realiza checkout', () => {
    StorePage.adicionarItens()
    StorePage.acessarCarrinho()
    CartPage.ValidarMochilaCarrinho()
    CartPage.ValidarLuzBikeCarrinho()
    CartPage.ValidarCamisetaCarrinho()
    CartPage.ValidarQuantidadeItensCarrinho()
    CartPage.NavegarPaginaCheckout()
    CheckoutOnePage.RealizarPreenchimentoValido()
    CheckoutOnePage.CheckoutButton()
    CheckoutTwoPage.ValidarProdutosCheckout()
    CheckoutTwoPage.FinalizarCompra()
  })
  ;
})