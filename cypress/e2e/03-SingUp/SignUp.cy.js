// We are going to test the register feature of the app
describe('creating an account', () =>{
    it('Navigates to the register page from the home page', ()=>{
        cy.visit('https://foodiehub.com.my/')
        // In order to reach the register page without the url, we need to navigate the app from the home page, to the log in page and then click on "Register Here"
        cy.get('.account-dropdown > .mdi').click()
        cy.get('.dropdown-content > .dropdown-item').click()
        // Pressing "Register Here" button
        cy.get('.title-message > .txt-interact').click()
        // Creating the account
        // Name and Last Name
        cy.get(':nth-child(1) > :nth-child(1) > .control > .input').type('Agustin')
        cy.get('.form-body > :nth-child(1) > :nth-child(2) > .control > .input').type('Blanco Kuhne')
        // Email Adress
        cy.get('.form-body > :nth-child(2) > .control > .input').type('myname@example.com')
        // Contact Number
        cy.get('.form-body > :nth-child(3) > .control > .input').type('123456')
        // Birth date
        cy.get('#dob_month').select('January')
        cy.get('#dob_day').type('22')
        cy.get('#dob_year').type('2001')
        // Changing the gender
        cy.get('.control > :nth-child(2) > label').click()
        cy.wait(1000)
        cy.get(':nth-child(5) > .radio > .control > :nth-child(1) > label').click()
        // Password
        cy.get('.addon-fix > .input').type('123456')
        // Making the password visible
        cy.get('.button > .mdi').click()
        cy.wait(1000)
        //Captcha?




    })
})