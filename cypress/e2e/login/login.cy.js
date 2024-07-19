/// <reference types="Cypress"/>

describe ('Teste Funcional de Login' , () => {
    it('Deve realizar o login com sucesso', () => {
        cy.login_teste('standard_user','secret_sauce')
        cy.get('.title').should('contain', "Products")
    })

    it('Validando Login Incorreto', () => {

        cy.login_teste('standard_user1','secret_sauce')
        cy.get('[data-test="error"]').should('contain', "Epic sadface: Username and password do not match any user in this service")
    })

    it('Validando Senha Incorreta', () => {

        cy.login_teste('standard_user','secret')
        cy.get('[data-test="error"]').should('contain', "Epic sadface: Username and password do not match any user in this service")
    })
})