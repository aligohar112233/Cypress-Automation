
describe('Test Suite', function () {

  before(function () {

    cy.fixture('example').then(function (data) {

      this.data = data

    })


  })




  it('Test Case', function () {


    cy.visit(Cypress.env('url')+"angularpractice/")
    //cy.visit("https://rahulshettyacademy.com/angularpractics")
    cy.contains('Shop').click()


    this.data.productName.forEach(element => {

      cy.ProductName(element)

    });
    cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
    var sum = 0;
    cy.get('tr td:nth-child(4) strong').each(($e1, index, $list) => {

      var amount = $e1.text()
      var neededamount = amount.split(" ")
      var splitamnt = neededamount[1]
      splitamnt.trim()
      sum = Number(sum) + Number(splitamnt)

    })
    cy.get('h3 > strong').then(function (element) {
      var total = element.text()
      var totalamnt = total.split(" ")
      var totalsplitamnt = totalamnt[1]
      totalsplitamnt.trim()
      var nm = parseInt(totalsplitamnt)
      expect(nm).to.equal(sum)





    })



    cy.get(':nth-child(5) > :nth-child(5) > .btn').click()



    cy.get('#country').type('India')
    cy.wait(5000)
    cy.get('.suggestions > ul > li > a').click()
    cy.wait(2000)
    cy.get('input[type="checkbox"]').click({ force: true });
    cy.get('.ng-untouched > .btn').click()
    cy.get('.alert').then(function (text) {

      const actualtext = text.text()
      expect(actualtext.includes('Success')).to.be.true
      //if(actualtext.includes('Success')){cy.log(actualtext)}


    })


  })

})