import { registerPage } from '../../page_object/register.page'
import { randomFirstName } from '../../utils'
import { randomLastName } from '../../utils'


describe('Register page', function(){

    beforeEach(()=>{
        cy.visit('/')
        cy.contains('Register').click()
      })
    
    it('TC - 01 Gradebook app check Register', function(){
        registerPage.register(randomFirstName(),randomLastName(),"milos123","milos123","milos@gmail.com")
        cy.url().should("include", "gradebooks")
        cy.contains("Sign out").should('be.visible')
    })
    
    after(()=>{
        cy.clearLocalStorage();
    })
})