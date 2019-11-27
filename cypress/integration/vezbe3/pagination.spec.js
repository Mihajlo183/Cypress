import { EMAIL } from '../../fixtures/constants'
describe('My First Test', function(){
    
    beforeEach(() => {
        cy.login(EMAIL.EXISTING, EMAIL.PASSWORD)
        // 
        
    })

    it('TC - 01 My gallery page - pagination', function(){
        cy.server()
        cy.route('GET', Cypress.config('backendUrl') + 'galleries?page=1&term=', 'fixture:gallery_count9.json').as('stub')
        cy.visit('/')
        cy.get('.cell').eq(8).should('exist')
        cy.get('.btn-custom').should('not.exist')
    })


    it('TC - 02 My gallery page - pagination', function(){
        cy.server()
        cy.route('GET', Cypress.config('backendUrl') + 'galleries?page=1&term=', 'fixture:gallery_count10.json').as('stub')
        cy.visit('/')
        cy.get('.cell').eq(9).should('exist')
        cy.get('.btn-custom').should('not.exist')
    })

    it.only('TC - 03 My gallery page - pagination', function(){
        cy.server()
        cy.route('GET', Cypress.config('backendUrl') + 'galleries?page=1&term=', 'fixture:gallery_count11.json').as('stub')
        cy.visit('/')
        cy.get('.btn-custom').should('exist')
        cy.route('GET', Cypress.config('backendUrl') + 'galleries?page=2&term=', 'fixture:gallery_count1.json').as('stub1')
        cy.get('.btn-custom').click()
        cy.get('.cell').eq(10).should('exist')
        cy.get('.btn-custom').should('not.exist')
    })

})
