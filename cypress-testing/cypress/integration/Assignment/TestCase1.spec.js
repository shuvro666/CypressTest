describe('Cypress Testing',() => {

    it ('Should navigate to nivea.de URL', function() {
        
      cy.visit('https://www.nivea.de')
      cy.wait(2000);
    }); 
    it('Should accept the cookie', function(){
      cy.get('.bdf-cookie-policy-accept').click();      
    })
});