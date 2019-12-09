import { loginPage } from '../../page_object/login.page'
import { EMAIL } from '../../fixtures/constans'

describe('Single Gratebook Page', function(){

    beforeEach(()=>{
        cy.visit('/')
        cy.contains('Sign in').click()
        loginPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
      })

      it('TC - 01 Home page - filter', function() {
        cy.wait(1000)
        cy.get('.form-control').type("Mih")
        cy.get('.btn').eq(0).click()
        cy.contains('Mihajlo').should("be.visible").click() 
        cy.contains("Add Student").should("be.visible")
    })
})