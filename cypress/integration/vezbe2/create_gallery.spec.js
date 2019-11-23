import { EMAIL } from '../../fixtures/constants'
import { authPage } from '../../page_object/login.page'


describe('My First Test', function(){
    
    beforeEach(() => {
        cy.visit('/login')
        // cy.contains('Login').click()
        authPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
        cy.contains('Submit').click()
        
    })

    it('TC - 01 My gallery page - pagination', function(){

    })

})