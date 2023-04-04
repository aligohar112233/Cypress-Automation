describe('Test Suite',function()
{
//test ds
it('Test Case',function(){

//cy.visit("https://dev.portal.sozie.com/signin");
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.get(".search-keyword").type('ca');
cy.wait(1000)
cy.get('.product').should('have.length',5)
cy.get('.products').as('pd')
cy.get('@pd').find('.product').should('have.length',4)
cy.get('@pd').find('.product').eq(2).contains('ADD TO CART').click();
cy.get('@pd').find('.product').each(($e1,index,$list)  =>{

const veg = $e1.find('h4.product-name').text()
if(veg.includes('Car')){
$e1.find('button').click();
//lec 20
}

})
cy.get('.brand').should('have.text','GREENKART')
cy.get('.brand').then(function(logo){

cy.log(logo.text( ))

})


})


})