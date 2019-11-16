import { EMAIL } from "../../fixtures/constans";

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


     it('TC-01 Login to galery app', function(){
        cy.url().should('include', '/login')
        cy.get('input[id="email"]').type(EMAIL.EXISTING)
        cy.get('input[id="password"]').type(EMAIL.PASSWORD)
        cy.get('button[type="submit"]').click()

        // cy.contains('Submit').click()   ---- moze i ovako da se odradi klik

     })

     it('TC-02 Login to galery app invalid credentials', function(){
         cy.get('input[id="email"]').type(EMAIL.EXISTING)
         cy.get('input[id="password"]').type('novasifra')
         cy.get('button[type="submit"]').click()
         cy.get('.alert-danger').should('have.text' , 'Bad Credentials') //have.text je za proveru da li postoji tekst (validaciona poruka)

     })


     it('TC-03 Login to galery app invalid credentials', function(){
        cy.get('input[id="email"]').type(EMAIL.EXISTING)
        cy.get('input[id="password"]').type('novasifra1')
        cy.get('button[type="submit"]').click()
        cy.get('.alert-danger').should('have.text' , 'Bad Credentials')

    })




})




