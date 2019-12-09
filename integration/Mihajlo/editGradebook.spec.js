import { loginPage } from '../../page_object/login.page'
import { EMAIL } from '../../fixtures/constans'

describe('Single Gratebook Page', function(){

    beforeEach(()=>{
        cy.visit('/')
        cy.contains('Sign in').click()
        loginPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
    })
    
    it.only('TC - 02 Edit gradebook', function (){
        cy.wait(1000)
        cy.get('.form-control').eq(0).type("Mih")
        cy.get('.btn').eq(0).click()
        cy.contains('Mihajlo').should("be.visible").click() 
        cy.contains('Edit Gradebook').click()
        cy.get('.nav-link').eq(2).click()
        cy.get('input[name="title"]').type("Dnevnik")
        cy.contains('Submit').click()    
        
        })

})
