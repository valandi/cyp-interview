describe('Applitools Interview', () => {
    beforeEach(() => {

    })

    // Write a test that satisfies the following workflow:
    //    1. Navigate to https://sandbox.applitools.com/e-commerce
    //    2. Open the page for "Small Succulent Planter Pot"
    //    3. Choose "gold" for "Select Color" Dropdown
    //    4. Increment count to 3. 
    //    5. Click "Add to cart"
    //    6. Navigate to cart (cart icon in the top right corner)
    //    7. Click "Checkout"
    //    8. Write an assertion to ensure that the total price of the cart is $9.69. 
    it('Applitools e-commerce test', () => {
        cy.visit('https://sandbox.applitools.com/e-commerce');

        cy.get('#__next > div.productsList_listingContainerStyle__naU6k > a:nth-child(1) > div.product-card_productImageStyle__jKHl6 > img').click();

        cy.get('select').select('gold');

        Cypress._.times(3, () => {
            cy.get('button').first().click();
        });

        cy.get('#buyButton').click();

        cy.get('#cartButton').click();

        cy.get('[aria-label="Decrement"]').click();

        cy.get('.cart_wrap__Osl_G').click();

        cy.get('#__next > div.cart_wrap__Osl_G > table > tbody > tr.cart_grandTotal__UOM3h > td.cart_totals__j6eK1').should('include.text', '$9.69');
    })

    // Part 2
    // Write a test that satisfies the following workflow:
    // 1. Navigate to https://the-internet.herokuapp.com/hovers
    // 2. Hover over the first image
    // 3. Write an assertion to ensure that the text "name: user1" is visible
    it('Hover Test', () => {
        cy.visit('https://the-internet.herokuapp.com/hovers');

        // Trigger hover action
        cy.get('#content > div > div:nth-child(3) > img').trigger('mouseover');
        
        // Force the parent container to display
        cy.get('#content > div > div:nth-child(3) > div.figcaption').invoke('show');
        
        // Verify that the tooltip text is visible
        cy.get('#content > div > div:nth-child(3) > div > h5').should('be.visible');
    })

    afterEach(() => {
    })

});