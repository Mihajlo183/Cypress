export default class SingleProfessorPage {
    get single() {
        return cy.get('td').children().eq(1)
    }
    get singlePage() {
        return cy.get('tbody').children('td').eq(1)
    }
    get table(){
        return cy.get('.table-bordered')
    }
    get h3(){
        return cy.get('h3')
    }
    prof({single}){
        single && this.single.click()
    }
}
export const singleProf = new SingleProfessorPage() 