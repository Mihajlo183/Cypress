import { loginPage } from '../../page_object/login.page'
import { EMAIL } from '../../fixtures/constans'




describe('Create New Professor Page', function(){
    var professorFirstName = "profesor12"
    var professorLastName = "profesor12"
    beforeEach(()=>{
        cy.visit('/')
        cy.contains('Sign in').click()
        loginPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
      })
    it('TC - 01 Create New Professor', function(){
        cy.get('.dropdown').click()
        cy.get('.dropdown-item').eq(1).click()
        cy.url().should('include', 'create-professor')
        cy.get('input[id="firstName"]').type(professorFirstName)
        cy.get('input[id="lastName"]').type(professorLastName) 
        cy.get('.btn').eq(0).click()
        cy.get('input[name="image_NaN"]').type("https://www.nationalgeographic.rs/files/images/2013/Vincent_van_Gogh___National_Gallery_of_Art_681308748.jpg")
        cy.contains('image_NaN').should("not.be.visible")
        cy.get('[type="Submit"]').click()
        cy.wait(1000)
        cy.scrollTo("bottom").contains(professorLastName).should('be.visible')

    })


    it('TC - 02 All professor page', function(){
        cy.get('.dropdown').click()
        cy.get('.dropdown-item').eq(0).click()
        cy.url().should('include', 'all-professor')
        wait(1000)
        cy.contains('FirstName').should("be.visible")
        cy.contains('LastName').should("be.visible")
        cy.contains('Picture').should("be.visible")
        cy.contains('Gradebook').should("be.visible")
    })

    it('TC - 03 Search All Professors', function(){
        cy.get('.dropdown').click()
        cy.get('.dropdown-item').eq(0).click()
        cy.url().should('include', 'all-professor')
        cy.wait(1000)
        cy.get('.form-control').type(professorFirstName)
        cy.contains(professorFirstName).should("be.visible")
    })

    after(()=>{
        cy.clearLocalStorage();
    })
})