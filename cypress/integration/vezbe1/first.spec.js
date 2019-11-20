import { EMAIL } from '../../fixtures/constants'
import { authPage } from '../../page_object/login.page'
describe('My First Test', function(){
    /*it('Does not do much!', function(){
        expect(true).to.equal(true)
    })
    it('Visit the Kitchen Sink', function(){
        cy.visit('https://example.cypress.io')
        cy.contains('type').click()
        cy.url().should('include', '/commands/actions')
    })*/
    beforeEach(() => {
        cy.visit('/')
        cy.contains('Login').click()
    })
    /*it('GalleryApp Register', function(){
        cy.contains('Register').click()
        cy.url().should('include', '/register')
    })
    it('Gallery Register', function() {
        cy.visit('/register')
        cy.get('input[id="first-name"]').type('olivera')
        cy.get('input[id="last-name"]').type('delic')
        cy.get('button[type="submit"]').click()
    })*/
    it('GalleryApp Login', function(){
        authPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
        //authPage.email.type(EMAIL.EXISTING)
        //authPage.password.type(EMAIL.PASSWORD)
        //authPage.submit.click()
    })
        
    it('TC -01 Verify Login with valid Email and password', function() {
            authPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
            //authPage.email.type(EMAIL.EXISTING)
            //authPage.password.type(EMAIL.PASSWORD)
            //authPage.submit.click()
        })
    it('TC - 02 Login without Email and Password credential', function() {
        authPage.login(' ', ' ')
        })
    it('TC - 03 Login with valid Email and without Password credential', function() {
        authPage.login(EMAIL.EXISTING, ' ')
        authPage.alert.should('have.text','Bad Credentials' )
        })
    it('TC - 04 Login with invalid Email and without Password credential', function() {
        authPage.login('oli07@gmail.com', ' ')    
        authPage.alert.should('have.text','Bad Credentials' )
        })
    it('TC - 05 Login with valid Email and invalid Password', function() {
            authPage.login(EMAIL.EXISTING, 'olja')
            authPage.alert.should('have.text','Bad Credentials' )
        })
        
    it('TC - 06 Login with invalid Email and valid Password', function() {
            authPage.login('oli07@gmail.com', EMAIL.PASSWORD)
            authPage.alert.should('have.text','Bad Credentials' )
        })
    it('TC - 07 Login with invalid Email and invalid Password', function() {
            authPage.login('oli07@gmail.com', 'oli')
            authPage.alert.should('have.text','Bad Credentials' )
        })
    it('TC - 08 Login without Email and valid Password', function() {
            authPage.login(' ', EMAIL.PASSWORD)
        })
    it('TC - 09 Login without Email and invalid Password', function() {
            authPage.login(' ', 'lol')
        })
      })
