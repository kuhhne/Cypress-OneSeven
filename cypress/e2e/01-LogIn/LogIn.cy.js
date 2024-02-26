// Here we are going to test the LogIn feature of the app, for this, we are going to navigate from the Home page
// All the way to the LogIn page like a user would, after we have LogIn, we are going to Log Out, just to have
// Some further testing.

describe('Testing the LogIn Feature', () => {
    it('Navigates to the login page' , () =>{
        // First we navigate to the Home page
        cy.visit('https://www.foodiehub.com.my/')
        // We go to the login page
        cy.get('.account-dropdown > .mdi').click()
        cy.get('.dropdown-content > .dropdown-item').click()
        // Writing down the credentials
        cy.get(':nth-child(1) > .control > .input').type('agustinkuhne39@outlook.com')
        cy.get('.addon-fix > .input').type('5d59695599')
        // Making the password visible
        cy.get('.field > :nth-child(2) > .button').click()
        //Pressing the Log In button
        cy.get('.form-footer > .button').click()
        //Checking if we log in successfully
        cy.get('.dashboard-profile > .dashboard-frame > .dashboard-title > .sub-title').should('contain.text', 'My profile')
        //Log out of the app
        cy.xpath('//*[@id="myaccount"]/div/div[1]/a/i').click()
        cy.xpath('//*[@id="myaccount"]/div/div[2]/div/a[6]').click()
        // Checking if we logout successfully
        cy.get('.message > .title').should('contain.text', 'Account Logout')
        // Notice I am using xpath only because I have find a plugin to use XPATH instead of CSS Selector
        // And I was trying it out
        
    })
})