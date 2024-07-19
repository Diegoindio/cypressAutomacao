/// <reference types="Cypress"/>

describe ('Teste E2E - Realizando a compra de produtos com sucesso' , () => {
    it('Fluxo Compra de produtos', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.get('.title').should('contain', "Products")

        //Ordenação de produtos de menor para maior valor:
        cy.get('[data-test="product-sort-container"]').select('Price (low to high)')
        cy.get(':nth-child(1) > [data-test="inventory-item-description"]').should('contain', 'Sauce Labs Onesie')
        cy.get(':nth-child(2) > [data-test="inventory-item-description"]').should('contain', 'Sauce Labs Bike Light')
        cy.get(':nth-child(3) > [data-test="inventory-item-description"]').should('contain', 'Sauce Labs Bolt T-Shirt')


        cy.contains('Sauce Labs Onesie').click()
        cy.get('[data-test="add-to-cart"]').click()
        cy.get('[data-test="back-to-products"]').click()

        cy.contains('Sauce Labs Bike Light').click()
        cy.get('[data-test="add-to-cart"]').click()
        cy.get('[data-test="back-to-products"]').click()

        cy.contains('Sauce Labs Bolt T-Shirt').click()
        cy.get('[data-test="add-to-cart"]').click()
        cy.get('[data-test="back-to-products"]').click()

        //Checagem da quantidade de produtos adicionados ao carrinho:
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '3')
        cy.get('[data-test="shopping-cart-badge"]').click()

         // Selecionar os elementos que representam os itens na lista do carrinho

        cy.get('[data-test="cart-list"] > :nth-child(3)').should('contain', 'Sauce Labs Onesie')
        cy.get('[data-test="cart-list"] > :nth-child(4)').should('contain', 'Sauce Labs Bike Light')
        cy.get('[data-test="cart-list"] > :nth-child(5)').should('contain', 'Sauce Labs Bolt T-Shirt')
        
        //Checkout
        cy.get('[data-test="checkout"]').click()

        cy.get('[data-test="firstName"]').type('Teste Primeiro Nome')
        cy.get('[data-test="lastName"]').type('Teste Ultimo Nome')
        cy.get('[data-test="postalCode"]').type('23123213123')
        cy.get('[data-test="continue"]').click()
        //Verificando todos os produtos do checkout
        cy.get('[data-test="cart-list"] > :nth-child(3)').should('contain', 'Sauce Labs Onesie')
        cy.get('[data-test="cart-list"] > :nth-child(4)').should('contain', 'Sauce Labs Bike Light')
        cy.get('[data-test="cart-list"] > :nth-child(5)').should('contain', 'Sauce Labs Bolt T-Shirt')

        //Checagem no valor total:

        cy.get('[data-test="total-label"]').should('have.text', 'Total: $36.69')
        cy.get('[data-test="finish"]').click()
        cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!')
    })
})
