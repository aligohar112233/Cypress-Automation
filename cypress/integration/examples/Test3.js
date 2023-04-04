
describe('Test Suite',function()
{

it('Test Case',function(){


cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

//cy.viewport(600, 600);
//cy.reload();
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
cy.get('input[type="checkbox"]').check(['option2','option3'])
1
cy.get('select').select('option2').should('have.value','option2')
cy.get('#autocomplete').type('IND')
cy.get('.ui-menu-item div').each(($e1,index,$list) =>{
    if($e1.text()==="India")
     {
        $e1.click()

     }
    
    })

    cy.get("#autocomplete").should('have.value',"India")
    cy.get('[value="radio2"]').check().should('be.checked')


    //visible invisible
cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')

})


})