import { loginPage } from '../../page_object/login.page'
import { EMAIL } from '../../fixtures/constans'
describe('Create Gradebook', function(){

    beforeEach(()=>{
        cy.visit('/')
        cy.contains('Sign in').click()
        loginPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
      })

    it('TC - 01 create Gradebook for new professor', function() {
        cy.wait(1000)
        cy.get('.nav-link').eq(2).click()
        cy.get('input[name="title"]').type("Mihajlo")
        cy.get('select').select('profesor profesor')
        cy.get('.btn').click()
        cy.url().should('include', 'gradebooks')
    })


    after(()=>{
        cy.clearLocalStorage();
    })
})