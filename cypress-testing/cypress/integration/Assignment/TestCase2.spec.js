describe('Cypress Testing',() => {

    it ('Should navigate to nivea.de login URL', function() {
      cy.visit('https://www.nivea.de/account/login')
      cy.wait(2000);
    }); 
    it('should accept cookie', function(){
    cy.get('.bdf-cookie-policy-accept').click();
    });
    it('should fill email,password text box and click submit button',function(){
      cy.get('#field_966aa7f5099e4290bd1f9aa6cb413759_email > input').type('niveatest@test-neveling.net');
      cy.get('.input-wrap > input').type('Niveatest1234!');
      cy.get('#966aa7f5099e4290bd1f9aa6cb413759_submit').click();
    });
    it('should verify user is logged in', function(){
      cy.url().should('include','my-account/profile');
    })

});