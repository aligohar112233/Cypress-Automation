
describe('Test Suite',function()
{

it('Test Case',function(){

//cy.visit("https://dev.portal.sozie.com/signin");
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.get(".search-keyword").type('cap');
cy.wait(1000)
cy.get('.products').as('pd')
cy.get('@pd').find('.product').each(($e1,index,$list)  =>{
const veg = $e1.find('h4.product-name').text()
if(veg.includes('Car')){
$e1.find('button').click;
}

})
cy.contains('ADD TO CART').click();
cy.get('.cart-icon > img').click()

cy.contains('PROCEED TO CHECKOUT').click()
cy.contains('Place Order').click().then(function(log){

    cy.log(log.text( ))
    
    })


})


})