import { EMAIL } from '../../fixtures/constants'
describe('My First Test', function(){
    
    beforeEach(() => {
        cy.login(EMAIL.EXISTING, EMAIL.PASSWORD)
        // cy.visit('/')

        
    })

    it('TC - 01 My gallery page - pagination', function(){
        cy.server()
        cy.route('GET', Cypress.config('backendUrl') + 'galleries?page=1&term=', 'fixture:gallery.json').as('stub')
        cy.get('.btn-custom').should('not.exist')
    })


    it('TC - 02 My gallery page - pagination', function(){
        cy.server()
        cy.route('GET', Cypress.config('backendUrl') + 'galleries?page=1&term=', 'fixture:gallery.json').as('stub')
        cy.get('.btn-custom').should('not.exist')
    })

    it('TC - 03 My gallery page - pagination', function(){
        cy.server()
        cy.route('GET', Cypress.config('backendUrl') + 'galleries?page=1&term=', 'fixture:gallery.json').as('stub')
        cy.get('.btn-custom').should('exist')
    })

})
