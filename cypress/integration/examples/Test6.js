
describe('Testsuite',function(){

it('Testcase',function(){

cy.visit("https://rahulshettyacademy.com/AutomationPractice")
cy.get('tr td:nth-child(2)').each(($e1 , index , $list) =>{

      const text = $e1.text()
       if(text.includes('WebSecurity')){

       cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){

       const pricetxt = price.text()
       expect(pricetxt).to.equal('20')




       })




       }



})









})

})