// Here we are going to test the checkout and shipping features of the app.
// Quick disclaimer, I will not be able to fully test this feature, since I should pay the order to complete the checkout.
describe('trying to buy a product', () =>{
    it('adding a product to the Cart', () =>{
        cy.visit('https://foodiehub.com.my/special?sg_type_pg=all_products')
        // Adding a product to the cart
        cy.get(':nth-child(5) > .frame > .item-img > a > .image > .sec-img').click()
        cy.get('.btn-add-cart > .button').click()
        // We proceed to the check out
        cy.get('a > .button').click()
        cy.get('#my-order-checkout').click()
        // Filling the shipping form
        cy.get('#email-newsletter > :nth-child(1) > :nth-child(1) > .field').type('myname@example.com')
        cy.get('#shipping-address > :nth-child(2) > :nth-child(1) > .field').type('Agustin')
        cy.get(':nth-child(2) > :nth-child(2) > .field').type('Blanco Kuhne')
        cy.get(':nth-child(3) > span.field > .field').type('123456')
        cy.get('#shipping-address > :nth-child(7) > span.field > .field').type('Fake street 123')
        cy.get('#shipping-address > :nth-child(9) > :nth-child(1) > .field').type('Fake City')
        cy.get('#country_id').select('Malaysia')
        cy.get(':nth-child(10) > :nth-child(2) > select').select('Johor')
        cy.get(':nth-child(9) > :nth-child(2) > .field').type('79000')
        cy.get('.control > span > a').click()
        // With the form being filled, we only need to finish the checkout
        cy.get('#apply_shipping').click()
        // Accepting the terms and conditions
        cy.get('#tnc > input').click()
        // And placing the order
        cy.get('#place-order-confirm').click()

        // Notice that the iPay88 is cannot be reach with cypress, this could be because the web page has some sort of bot protection, so here ends my testing in the checkout method.
        


    })
})