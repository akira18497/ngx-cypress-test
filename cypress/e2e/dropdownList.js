describe('dropdown list', () => {

    beforeEach(() => {
        cy.navigateToFormLayouts()
    })
    it('Lists and dropdowns', () => {
        //1
        cy.get('nav nb-select').click()
        cy.get('.options-list').contains('Dark').click()
        cy.get('nav nb-select').should('contain', 'Dark')

        //2
        cy.get('nav nb-select').then( dropDown => {
            const object = cy.wrap(dropDown)
            object.click()

            cy.get('.options-list nb-option').each(listItem => {

                const itemTest = listItem.text().trim()

                cy.wrap(listItem).click()
                object.should('contain', itemTest)
                object.click()
            })

        })
    })
})