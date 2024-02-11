describe('test to boxex', () => {
    it('test the radio button', () => {
        cy.visit("https://codenboxautomationlab.com/practice/")

        // to select the first radio button on the index

        cy.get("#radio-btn-example").find('input[type="radio"]').eq(1).check()

        //to select first element 

        cy.get("#radio-btn-example").find('input[type="radio"]').first().check()

        //to select last element 
        cy.get("#radio-btn-example").find('input[type="radio"]').last().check()




    });
});