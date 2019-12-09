import { loginPage } from '../../page_object/login.page'
import { EMAIL } from '../../fixtures/constans'

describe('My gradebook page', function(){

    beforeEach(()=>{
        cy.visit('/')
        cy.contains('Sign in').click()
        loginPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
        cy.get('.nav-link').eq(1).click()
    })

    it('TC - 01 My Gradebook', function() {
       cy.wait(1000)
       cy.get('.nav-link').eq(1).click()

       cy.contains("Sign out").should("be.visible")
       cy.contains("Gradebooks").should("be.visible")
       cy.contains("My Gradebook").should("be.visible").click
       cy.contains("Create Gradebook").should("be.visible")
       cy.contains("Professor").should("be.visible")
       cy.contains("Submit").should("be.visible")
    })

    after(()=>{
        cy.clearLocalStorage();
    })
})