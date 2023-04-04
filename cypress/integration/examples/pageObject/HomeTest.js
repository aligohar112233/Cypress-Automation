import Home from "./Home"

describe('HomePage TestCases', function () {



    before(function () {
        cy.visit("https://rahulshettyacademy.com/angularpractice/")


        cy.fixture('example').then(function (data) {

            this.data = data

        })


    })

    it('Test Case', function () {

        let Mhome = new Home();

        Mhome.getName().type(this.data.name)
        Mhome.getgender().select(this.data.gender)
        cy.get('input[name="name"]:nth-child(2)').as('name')
        cy.get('@name').should('have.value', this.data.name)
        cy.get('@name').should('have.attr', 'minlength', '2')
        Mhome.getEntrepreneur().should('be.disabled')
        Mhome.getStudentradiobtn().check()
        Mhome.getStudentradiobtn().should('be.checked')
        Mhome.getStudentradiobtn().check()
        Mhome.getSubmitbtn().click()
        Mhome.getalert().then(function (textt) {

            textt.text()
            cy.log(textt.text())
            cy.log(textt.text().includes('\n'))

        })
        Mhome.getClose().click()


    })
})