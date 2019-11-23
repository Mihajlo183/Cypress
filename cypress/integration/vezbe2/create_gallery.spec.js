import { EMAIL } from '../../fixtures/constants'
import { authPage } from '../../page_object/login.page'
import { createGallery } from '../../page_object/create_gallery.page'
import { randomEmail } from '../../utils'


describe('My First Test', function(){
    
    beforeEach(() => {
        cy.visit('/login')

        authPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
        
        
    })

    // it('TC - 01 My gallery page - pagination', function(){
    //     cy.get('.cell').eq(9).should('exist')
    //     cy.get('.cell').eq(10).should('not.exist')
    //     cy.get('button[class="btn btn-custom"]').click()
    //     //Nikad ne koristi eksplicitan wait u miliskeundama kao ispod
    //     cy.wait(4000)
    //     cy.get('.cell').eq(19).should('exist')
    //     cy.get('.cell').eq(20).should('not.exist')

    // })
    // DRUGI NACIN
    it('TC - 02 My gallery page - pagination', function(){
        cy.get('div.grid').children().should('have.length', 10)
        cy.contains('Load More').click()
        cy.get('div.grid').children().should('not.have.length',10)
    })

    it('TC - 03 Create gallery - positive case', function() {
        var RANDOM = randomEmail()
        cy.contains('Create Gallery').click()
        createGallery.title.type(RANDOM)
        createGallery.description.type('This is a validd description')
        createGallery.picture.type('https://www.espreso.rs/data/images/2017/12/08/15/298425_atila-sabo-cigota_ff.jpg')
        cy.contains('Submit').click()
        // cy.get('.box-title').eq(0).should('have.text', '\n This is the title\n')
        cy.get('.box-title').eq(0).should('contain', RANDOM)


    })

    it.only('TC - 03 Create gallery - input field', function(){
        cy.contains('Create Gallery').click()
        cy.contains('Add image').click()
        createGallery.picture.eq(1).should('exist')
        cy.get('i[class="fas fa-trash"]').eq(0).click()
        createGallery.picture.eq(1).should('not.exist')        
    })

    

})