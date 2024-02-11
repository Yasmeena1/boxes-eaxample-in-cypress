describe('to test the boxes ', () => {
    it('to test the checkbox', () => {
        cy.visit("https://codenboxautomationlab.com/practice/")

        // single chick for one checkbox
        cy.get('input[type="checkbox"]').eq(1).check()

        // it will select all 

        cy.get('input[type="checkbox"]').check()

        // it will select specific one based on my selection 
        cy.get('input[type="checkbox"]').check(["option1", "option2"])



    });

});