import { loginPage } from '../../page_object/login.page'
import { singleProf } from "../../page_object/singleprofessor.page"
import { EMAIL } from '../../fixtures/constans'

describe('Single professor page', function(){
    beforeEach(() => {       
        cy.visit('/')
        loginPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
        singleProf.single.click()
    })
      it('TC -01 Single Professor Page Test', function(){
        singleProf.h3.should('have.text', 'Single Professor Page')
        singleProf.table.should('contain', 'Professor')
        singleProf.table.should('contain', 'Gradebook')
        singleProf.table.should('contain', 'Image')
        singleProf.table.should('contain', 'Number of students')
     })
     it('TC -02 Cheking single gradebook link', function(){
        singleProf.singlePage.click()
        singleProf.h3.should('have.text', 'Single Gradebook Page')
   })
}) 