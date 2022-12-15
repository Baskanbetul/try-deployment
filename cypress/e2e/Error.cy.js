describe('Error', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://fedeperin-harry-potter-api-en.herokuapp.com/characters', {
      fixture : 'harryPotter.json',
      statusCode: 200
    });
    cy.visit('http://localhost:3000/lordOfTheRings/');
  })

  it('Should contain the header', () => {
    cy.get('h1').contains('Welcome to Hogwarts');
  })

  it('Should have error message', () => {
    cy.get('.error-messaging').contains('🥹 Something is going wrong! 🥹');
    cy.get('p').contains('Please return to home page using the Harry Potter link above.')
  })

  it('Should be able to go back to the home page when clicking logo', () => {
		cy.get('h1').click();
		cy.url().should('eq', 'http://localhost:3000/');
	});

})
 