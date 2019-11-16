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


     it('finds the content "Register"', function(){
         cy.visit('/')

         cy.contains('Register').click()

         cy.url().should('include', '/register')
     })


     it('finds the content "Login"', function(){
        cy.visit('/')

        cy.contains('Login').click()

        cy.url().should('include', '/login')


        cy.get('input[id="email"]')
          .type('novikorisnik@gmail.com')

        cy.get('input[id="password"]').type('novasifra1')

        cy.contains('Submit').click()


    })


})




