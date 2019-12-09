import { loginPage } from '../../page_object/login.page'
import { EMAIL } from '../../fixtures/constans'

describe('Single Gratebook Page', function(){

    beforeEach(()=>{
        cy.visit('/')
        cy.contains('Sign in').click()
        loginPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
    })
    
    it.only('TC - 01 Delete Gradebook', function (){
        cy.wait(1000)
        cy.get('.form-control').eq(0).type("Mih")
        cy.get('.btn').eq(0).click()
        cy.wait(1000)
        cy.contains('MihajloDnevnik').should("be.visible").click() 
        cy.contains('Delete Gradebook').click()
           
        
        })

})
