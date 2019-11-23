export default class CreateGallery {
    get title(){
        return cy.get('#title')
    }

    get description(){
        return cy.get('#description')
    }

    get picture(){
        return cy.get('input[type="url"]')
    }

    get addImageButton(){
        return cy.contains('Add image')
    }

    get submitButton(){
        return cy.get('.btn-custom').contains('Submit')
    }

    get cancelButton(){
        return cy.get('.btn-custom').contains('Cancel')
    }

}

export const createGallery = new CreateGallery()