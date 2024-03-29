# Cypress-OneSeven

Welcome to the Cypress Automation Project at OneSeven Tech! This project is part of our technical evaluation process, designed to demonstrate our capability in automating tests for web applications. Our goal is to ensure high-quality, robust, and efficient testing workflows.

## Getting Started

1. git clone https://github.com/kuhhne/Cypress-OneSeven.git
2. npm install on the root of the project
3. npx cypress open to open the cypress UI


### Prerequisites

1. Node.JS v20.11.1: https://nodejs.org/en
2. Cypress v10.4.0
3. Chrome v122.0.0


## Running the tests

Once you have the project set up, follow these steps to run your tests using Cypress:

1. Open your terminal and ensure you are in the project directory.

2. Start Cypress by running the command:
    npx cypress open

3. Upon launching, Cypress will prompt you to choose a testing type. Select End to End Testing.

4. Next, you'll be asked to select a browser in which to run your tests. Choose Chrome v122 from the list of available browsers.

5. Navigate to the Specs tab within the Cypress UI.

6. Here, you'll see a list of your test files (specs). Click on a test file to run those specific tests.

Cypress will execute the selected tests in the Chrome browser, allowing you to see the results in real-time. You can watch as Cypress interacts with your application, running through each test step defined in your spec file.

### End-to-end tests

# Testing the Login Feature

    For OneSeven Tech's Cypress Automation Project, we're focusing on a critical user journey: the login functionality. 
    This is a vital feature because it involves user authentication, a cornerstone of personalization and security. 
    By testing the login and logout process end-to-end, we ensure that users can securely access their accounts and that their data remains protected throughout their session.

# Why Test the Login Feature?

    Security: Ensures that the authentication mechanism is secure and that user data is protected.

    User Experience: Verifies that users can log in and log out smoothly, which is essential for user retention and satisfaction.

    Data Integrity: Ensures that user sessions are correctly initiated and terminated, preventing session hijacking or leakage of sensitive information.


# Testing the Search Feature

    The search functionality is a vital feature for any e-commerce or content-driven website. 
    It directly impacts the user's ability to find and interact with content or products, influencing their overall experience and satisfaction with the platform. 
    By testing the search feature end-to-end, we ensure that users can successfully locate specific items, which is essential for sales conversion and user engagement.

# Why Test the Search Feature?

    Functionality: Ensures the search engine returns accurate results based on the user's query.

    User Experience: Verifies that users can easily find and engage with products they are interested in, enhancing their overall experience on the platform.

    Performance: Ensures that the search results are returned in a timely manner, contributing to a smooth and efficient user experience.


# Testing the Shopping Cart Feature

    The shopping cart feature's functionality encompasses adding items to the cart, adjusting quantities, reviewing selected items, and proceeding to checkout.
    Given the complexity of these interactions and their importance in the sales process, thorough testing is crucial. 
    This is especially true if manual assessments have already identified potential bugs, as automated testing can provide a systematic way to verify fixes and ensure stability over time.

# Why Test the Shopping Cart?

    Reliability: Ensures that products added to the cart are accurately reflected in terms of quantity and details.

    User Experience: Verifies that users can easily modify their cart contents, such as changing quantities or removing items, enhancing their shopping experience.

    Bug Verification: Helps in systematically verifying that previously identified bugs have been fixed and do not reoccur.


# Testing the Browser Feature for Product Search

    The browser feature within an app typically allows users to search and navigate through the available products or content more efficiently. 
    This feature is especially important in e-commerce platforms where users come with specific needs or products in mind. 
    Testing this feature involves simulating the search process a user would go through to find a specific product.

# Why Test the Browser Feature?

    Usability: Ensures that users can easily navigate and use the search functionality to find products.

    Accuracy: Verifies that the search results are relevant and accurate, based on the search criteria entered by the user.

    Performance: Confirms that the search function returns results quickly, enhancing the user experience by minimizing wait times.


# Testing Checkout and Shipping Features

    The checkout and shipping functionalities are pivotal for e-commerce platforms, directly impacting customer satisfaction and conversion rates. 
    Testing these features involves simulating the steps a customer would take to purchase a product, ensuring that each part of the process is functioning as expected.

# Why Test Checkout and Shipping?

    Functionality: Ensures that users can add products to their cart, proceed to checkout, and enter shipping details without issues.

    User Experience: Verifies that the checkout process is intuitive and straightforward, encouraging users to complete their purchases.

    Accuracy: Confirms that shipping information is correctly processed and displayed, and that costs are accurately calculated based on the provided details.

    Security and Reliability: Ensures that the payment gateway integration works correctly, even though the actual payment process might not be fully testable in an automated test environment due to security constraints.


# Testing Register Feature

    End-to-end testing for an account registration feature in a web application is crucial for ensuring that users can successfully create accounts, which is often the first step in engaging with the platform's services or products. 
    This kind of testing validates the entire process from the user's perspective, from navigating to the registration form to filling out and submitting the necessary information.

# Why Test the Registration Feature?

    User Onboarding: The registration process is a user's initial interaction with your platform. A smooth and intuitive sign-up experience is crucial for good first impressions.

    Data Validation: Ensures that the input fields correctly validate the data entered by users, such as email formats, password strength, and mandatory fields.

    Security: Tests the implementation of security measures like CAPTCHAs and data encryption to protect the user and the platform from automated attacks and data breaches.

    Feedback and Error Handling: Ensures that users receive appropriate feedback for incorrect or incomplete information, guiding them to correct errors and complete the registration process successfully.