import { EMAIL } from "../../fixtures/constants"
import { authPage } from '../../page_object/login.page'

describe('My First Test', function(){
    
    
    // it('Does not do much!', function(){
    //     expect(true).to.equal(true)
    // })


    // it('Visits the Kitchen Sink', function(){
    //     cy.visit('https://example.cypress.io')
    // })


    // it('finds the content "type"', function() {
    //     cy.visit('https://example.cypress.io')
    
    //     cy.contains('type')
    //     cy.contains('type').click()
        
    
    //     // Should be on a new URL which includes '/commands/actions'
    //     cy.url().should('include', '/commands/actions')

    //   })
    beforeEach (() => {
        cy.visit('/')
        cy.contains('Login').click()
    })

    before(() =>{

    })

     it('Finds the content "Register"', function(){
         cy.visit('/')
         cy.contains('Register').click()
         cy.url().should('include', '/register')
     })


     it('TC-01 Login to galery app', function() {
         authPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
        // cy.url().should('include', '/login')
        // authPage.email.type(EMAIL.EXISTING)
        // authPage.password.type(EMAIL.PASSWORD)
        // authPage.submit.click()

        // cy.contains('Submit').click()   ---- moze i ovako da se odradi klik

     })

     it('TC-02 Login to galery app invalid credentials', function(){
        authPage.email.type(EMAIL.EXISTING)
         cy.get('input[id="password"]').type('novasifra')
         cy.get('button[type="submit"]').click()
         cy.get('.alert-danger').should('have.text' , 'Bad Credentials') //have.text je za proveru da li postoji tekst (validaciona poruka)

     })


     it('TC-03 Login to galery app invalid credentials', function(){
        authPage.email.type(EMAIL.EXISTING)
        cy.get('input[id="password"]').type('novasifra1')
        cy.get('button[type="submit"]').click()
        cy.get('.alert-danger').should('have.text' , 'Bad Credentials')

    })




})




