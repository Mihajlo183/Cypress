import { loginPage } from '../../page_object/login.page'
import { EMAIL } from '../../fixtures/constans'

describe('Single Gratebook Page', function(){

    beforeEach(()=>{
        cy.visit('/')
        cy.contains('Sign in').click()
        loginPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
    })

      it('TC - 01 Add and Delete comment', function() {
        cy.wait(1000)
        cy.get('.form-control').eq(0).type("Mih")
        cy.get('.btn').eq(0).click()
        cy.contains('Mihajlo').should("be.visible").click() 
        cy.get('textarea[placeholder="Writte your comment"]').type("KOMENTAR")
        cy.contains('Submit Comment').click()
        cy.get('.btn').eq(3).click()

        
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




    // it('TC - 02 Delete comment', function() {
    //     cy.wait(1000)
    //     cy.get('.form-control').type("Mih")
    //     cy.get('.btn').eq(0).click()
    //     cy.contains('Mihajlo').should("be.visible").click() 
    //     cy.get('textarea[placeholder="Writte your comment"]').type("KOMENTAR")
    //     cy.contains('Submit Comment').click()
    //     cy.wait(1000)
    //     cy.contains('Delete').click()
        
    // })


})