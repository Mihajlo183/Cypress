import { EMAIL } from '../../fixtures/constans'
import { loginPage } from '../../page_object/login.page'

describe('Login Page', function(){

    beforeEach(()=>{
        cy.visit('/')
        cy.contains('Sign in').click()
      })
    
    it('TC -01 Verify Login with valid Email and password', function(){
        loginPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
        cy.url().should("include", "/login")
    })


    it('TC - 02 Login with invalid Email and Password', function(){
        loginPage.login("miko@gmail.com","adfadfa")
        cy.url().should("include", "/login")
    })

    it('TC - 03 Login with empty email', function(){
        cy.get('input[name="password"]').type('miko123')
        cy.get('button[type=submit]').click()
        loginPage.email.then(($input)=>{
            expect($input[0].validationMessage).to.eq('Please fill out this field.')
          })
        cy.url().should("include", "/login")

    })

    it('TC - 04 Login with mpty password', function(){
        cy.get('input[name="email"]').type('miko123@gmail.com')
        cy.get('button[type=submit]').click()
        loginPage.password.then(($input)=>{
            expect($input[0].validationMessage).to.eq('Please fill out this field.')
          })
        cy.url().should("include", "/login")

    })

    after(()=>{
        cy.clearLocalStorage();
    })
})