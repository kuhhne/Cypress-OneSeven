// We are going to play around with the product list with cypress
describe('sorting the products', () =>{
    it('playing with the sorting methods', () =>{
        cy.visit('https://www.foodiehub.com.my/special?sg_type_pg=all_products')
        cy.get('.product-sorting > select').select('Name (A - Z)')
        cy.wait(2000)
        cy.get('.product-sorting > select').select('Name (Z - A)')
        cy.wait(2000)
        cy.get('.product-sorting > select').select('Price (Low > High)')
        cy.wait(2000)
        cy.get('.product-sorting > select').select('Price (High > Low)')
        cy.wait(2000)
        cy.get('.product-sorting > select').select('Newest > Oldest')
        cy.wait(2000)
        cy.get('.product-sorting > select').select('Oldest > Newest')
    })
})