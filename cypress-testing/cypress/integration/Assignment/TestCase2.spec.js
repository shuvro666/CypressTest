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
      cy . get ( '.bdf-cookie-policy-accept' ). click ();
      cy . contains ( 'edit' ). click ()
      cy . get ( '# 521aa7b40247454e815f9144df398f00_title_0_1' ). click ()
      cy . get ( 'input [name = "521aa7b40247454e815f9144df398f00_firstname"]' ). clear (). type ( 'Shuvro' )
      cy . get ( 'input [name = "521aa7b40247454e815f9144df398f00_lastname"]' ). clear (). type ( 'Das' )
      cy . get ( '[name = "521aa7b40247454e815f9144df398f00_birthday_d"]' ). select ( '1' );
      cy . get ( '[name = "521aa7b40247454e815f9144df398f00_birthday_m"]' ). select ( '12' );
      cy . get ( '[name = "521aa7b40247454e815f9144df398f00_birthday_y"]' ). select ( '1989' );

      cy . contains ( 'save changes' ). click ()
      // verification
      cy . get ( '#fullname' ). contains ( 'Shuvro das' )
      cy . get ( '.profile-box-row' ). contains ( '01 .12.1989 ' )
    })

});
