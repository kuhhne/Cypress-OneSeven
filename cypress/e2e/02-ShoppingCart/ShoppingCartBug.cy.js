// In this script we are going to reproduce the bug that I have found in my manual assessment

describe('testing the cart from the Home Page', () =>{
    it('navigates to the product page from the Home page', () =>{
        cy.visit('https://foodiehub.com.my/')
        // Now we go to the product page
        cy.get('#burger-mainmenu').click()
        cy.get('.navbar-link > span').click()
        // We check the cart to see if it works
        cy.get('#clickme').click()
        // We give the app some time to see if the bug occurs
        cy.wait(2000)
        cy.get('#btn-close-cart').should('exist')
        cy.get('#btn-close-cart').click()
        // It doesn't always bug, so we try to force the bug by repeting the process
        cy.get('.header-logo').click()
        cy.get('#burger-mainmenu').click()
        cy.get('.navbar-link > span').click()
        // We open the cart
        cy.get('#clickme').click()
        // We give some time again
        cy.wait(2000)
        cy.get('#btn-close-cart').should('exist')

        
    })
})