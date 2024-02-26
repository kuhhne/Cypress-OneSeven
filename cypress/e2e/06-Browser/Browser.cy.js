//We are going to test the browser feature of the app
describe('searching for a specific product', () =>{
    it('enters a search criteria', ()=>{
        cy.visit('https://www.foodiehub.com.my/')
        // We click the Browser button
        cy.get('.search-bar-container > .mdi').click()
        // We enter a search criteria
        cy.get('#modal_search').type('Korean Gojuchang Chicken Floss (200GM)')
        cy.get('#btn-search').click()
        // We verify that is the product that we looked for
        cy.get('.product-name > a').should('contain.text', 'Korean Gojuchang Chicken Floss (200GM)')
    })
})