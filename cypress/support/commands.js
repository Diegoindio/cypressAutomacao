// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login_teste', (user, password) => {
    cy.visit("https://www.saucedemo.com/")
    cy.get('[data-test="username"]').type(user)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click()
})

Cypress.Commands.add('verificaProdutos', () => {
    cy.get('[data-test="cart-list"] > :nth-child(3)').should('contain', 'Sauce Labs Onesie')
    cy.get('[data-test="cart-list"] > :nth-child(4)').should('contain', 'Sauce Labs Bike Light')
    cy.get('[data-test="cart-list"] > :nth-child(5)').should('contain', 'Sauce Labs Bolt T-Shirt')
})


Cypress.Commands.add('addProdutosCarrinho', (produtos) => {
    produtos.forEach((nomeProduto) => {
        cy.contains(nomeProduto).click()
        cy.get('[data-test="add-to-cart"]').click()
        cy.get('[data-test="back-to-products"]').click()
    });
});


Cypress.Commands.add('removerProdutosCarrinho', (idsProdutos) => {
    cy.wait(2000); // Adicione uma espera para garantir que a página carregou

    idsProdutos.forEach((idProduto) => {
        cy.get(`[data-test="${idProduto}"]`, { timeout: 10000 }) // Aumente o timeout se necessário
            .click()
            .then(() => {
                cy.log(`Botão com ID "${idProduto}" clicado.`);
            });
    });

    Cypress.Commands.add('removerProdutosCheckout', (idsProdutos) => {
        cy.wait(2000); // Adicione uma espera para garantir que a página carregou

        idsProdutos.forEach((idProduto) => {
            cy.get(`[data-test="${idProduto}"]`, { timeout: 10000 }) // Aumente o timeout se necessário
                .click()
                .then(() => {
                    cy.log(`Botão com ID "${idProduto}" clicado.`);
                });
        });
    });
})