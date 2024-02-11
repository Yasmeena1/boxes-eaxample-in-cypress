describe('to test the boxes ', () => {
    it('to test the staticDropbox', () => {

        cy.visit("https://codenboxautomationlab.com/practice/")

        // normal way to select
        cy.get("#dropdown-class-example").select("Selenium")

        //another way to select one 
        cy.get("#dropdown-class-example").select("Selenium").should("have.value", "option1")

    });
});