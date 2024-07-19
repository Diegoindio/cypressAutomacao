/// <reference types="Cypress"/>

describe('Teste E2E - Realizando a compra de produtos com sucesso', () => {
    it('Fluxo Compra de produtos', () => {
        cy.login_teste('standard_user', 'secret_sauce')
        cy.get('.title').should('contain', "Products")

        //Ordenação de produtos de menor para maior valor:
        cy.get('[data-test="product-sort-container"]').select('Price (low to high)')
        cy.get(':nth-child(1) > [data-test="inventory-item-description"]').should('contain', 'Sauce Labs Onesie')
        cy.get(':nth-child(2) > [data-test="inventory-item-description"]').should('contain', 'Sauce Labs Bike Light')
        cy.get(':nth-child(3) > [data-test="inventory-item-description"]').should('contain', 'Sauce Labs Bolt T-Shirt')

        //Adicionando produtos ao carrinho:
        const nomeProduto = ['Sauce Labs Onesie', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt']

        cy.addProdutosCarrinho(nomeProduto)

        //Checagem da quantidade de produtos adicionados ao carrinho:
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '3')
        cy.get('[data-test="shopping-cart-badge"]').click()

        // Selecionar os elementos que representam os itens na lista do carrinho

        cy.verificaProdutos()

        //Checkout
        cy.get('[data-test="checkout"]').click()

        cy.get('[data-test="firstName"]').type('Teste Primeiro Nome')
        cy.get('[data-test="lastName"]').type('Teste Ultimo Nome')
        cy.get('[data-test="postalCode"]').type('23123213123')
        cy.get('[data-test="continue"]').click()
        //Verificando todos os produtos do checkout
        cy.verificaProdutos()

        //Checagem no valor total:

        cy.get('[data-test="total-label"]').should('have.text', 'Total: $36.69')
        cy.get('[data-test="finish"]').click()
        cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!')
    })
})

describe('Teste E2E - Removendo produtos da compra', () => {
    it('Fluxo Remover produtos do carrinho', () => {
        cy.login_teste('standard_user', 'secret_sauce')
        cy.get('.title').should('contain', "Products")

        //Adicionando produtos ao carrinho:
        const nomeProduto = ['Sauce Labs Onesie', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt']

        cy.addProdutosCarrinho(nomeProduto)
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '3')

        //Remover produtos do carrinho:
        const idsProdutos = ['remove-sauce-labs-onesie', 'remove-sauce-labs-bike-light', 'remove-sauce-labs-bolt-t-shirt']
        cy.removerProdutosCarrinho(idsProdutos);
        cy.get('[data-test="shopping-cart-link"]', { timeout: 10000 }).should('be.visible')
    })
    it('Fluxo Remover produtos do checkout', () => {
        cy.login_teste('standard_user', 'secret_sauce')
        cy.get('.title').should('contain', "Products")

        //Adicionando produtos ao carrinho:
        const nomeProduto = ['Sauce Labs Onesie', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt']
        cy.addProdutosCarrinho(nomeProduto)
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '3')
        cy.get('[data-test="shopping-cart-badge"]').click()
        // Selecionar os elementos que representam os itens na lista do carrinho
        cy.verificaProdutos()

        //remove produtos da pagina checkout
        const idsProdutos = ['remove-sauce-labs-onesie', 'remove-sauce-labs-bike-light', 'remove-sauce-labs-bolt-t-shirt']
        cy.removerProdutosCheckout(idsProdutos)
        cy.wait(1000)
        cy.get('[data-test="continue-shopping"]').click()



    })
})
