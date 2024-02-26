// In this test we are going to test the Shopping Cart Feature of the app, we already know that this feature 
// has some bugs, like I have reported in my Manual Assessment, so lets try it out in Automation.

describe('using the cart', () => {
    it('navigates to the product page', () => {
        // First we visit the Product page
        cy.visit('https://www.foodiehub.com.my/special?sg_type_pg=all_products')
        // We try to add a product to the cart through the indiviual product page
        cy.get(':nth-child(5) > .frame > .item-img > a > .image > .sec-img').click()
        cy.get('.btn-add-cart > .button').click()
        // We increrase the cuantity of the product in the cart
        cy.get('#quantity_0_plus > .fa').click()
        cy.wait(1000)
        // We close the cart
        cy.get('#btn-close-cart').click()
        // Going back to the product page
        cy.get('#burger-mainmenu').click()
        cy.get('.navbar-link > span').click()
        // Trying to add products directly from the main product page
        cy.get(':nth-child(3) > .frame > .item-info > .price').trigger('mouseover')
        cy.wait(2000)
        // Using xpath to find the add to cart button
        cy.xpath('//*[@id="main-content"]/div/div[2]/div[2]/div/div[3]/div/div[2]/div[5]/div/span[2]/input').click({force: true})
        cy.xpath('//*[@id="my-side-cart"]/div').should('exist')
    })
})