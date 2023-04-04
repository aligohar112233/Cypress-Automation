class Home {

    getName() {
        return cy.get('input[name="name"]:nth-child(2)');
    }

    getgender() {

        return cy.get("#exampleFormControlSelect1")

    }
    getEntrepreneur() {
        return cy.get('#inlineRadio3')
    }

    getStudentradiobtn() {
        return cy.get('#inlineRadio1')
    }
    getSubmitbtn() {
        return cy.get('.btn')

    }
    getalert() {
        return cy.get('.alert')
    }
    getClose() {
        return cy.get('.close')
    }

}

export default Home;