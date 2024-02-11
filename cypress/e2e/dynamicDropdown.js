describe('handling dropdown list functionality', () => {
    it('to test daynamicDropdown', () => {
        cy.visit("https://codenboxautomationlab.com/practice/")
        cy.get("#autocomplete").type("hu")

        cy.get(".ui-menu-item").each((ele, index, list) => {

            if (ele.text() == "Hungary")
                cy.wrap(ele).click()


        })







    });
});