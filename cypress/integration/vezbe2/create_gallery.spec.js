import { EMAIL } from '../../fixtures/constants'
import { authPage } from '../../page_object/login.page'


describe('My First Test', function(){
    
    beforeEach(() => {
        cy.visit('/login')

        authPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
        
        
    })

    // it('TC - 01 My gallery page - pagination', function(){
    //     cy.get('.cell').eq(9).should('exist')
    //     cy.get('.cell').eq(10).should('not.exist')
    //     cy.get('button[class="btn btn-custom"]').click()
    //     //Nikad ne koristi eksplicitan wait u miliskeundama kao ispod
    //     cy.wait(4000)
    //     cy.get('.cell').eq(19).should('exist')
    //     cy.get('.cell').eq(20).should('not.exist')

    // })
    // DRUGI NACIN
    it('TC - 02 My gallery page - pagination', function(){
        cy.get('div.grid').children().should('have.length', 10)
        cy.contains('Load More').click()
        cy.get('div.grid').children().should('not.have.length',10)
    })

    

})