import { loginPage } from '../../page_object/login.page'
import { EMAIL } from '../../fixtures/constans'

describe('Home page', function(){

    beforeEach(()=>{
        cy.visit('/')
        cy.contains('Sign in').click()
        loginPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
      })

    it('TC - 01 Home page : Pagination', function () {
        cy.contains('Next').should('be.visible').click()
        cy.contains('Previous').should('be.visible').click()
    })
    
    it('TC - 02 Home page - filter', function() {
        cy.wait(1000)
        cy.get('.form-control').type("Mih")
        cy.get('.btn').eq(0).click()
        cy.contains('Mihajlo').should("be.visible").click()   
    })

    it('TC - 03 Layout-logged in user', function() {
        cy.contains("Sign out").should("be.visible")
        cy.contains("Gradebooks").should("be.visible")
        cy.contains("My Gradebook").should("be.visible")
        cy.contains("Create Gradebook").should("be.visible")
        cy.contains("Professor").should("be.visible")
        cy.contains("Sign in").should("not.be.visible")
     })

    after(()=>{
        cy.clearLocalStorage();
    })
})