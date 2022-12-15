describe('Home', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://fedeperin-harry-potter-api-en.herokuapp.com/characters', {
      fixture : 'harryPotter.json',
      statusCode: 200
    });
    cy.visit('http://localhost:3000/');
  })

  it('Should see the home page', () => {
    cy.get('h1').contains('Welcome to Hogwarts');
    cy.get('button').contains('Favorites');
    cy.get('.characters').within(() => {
      cy.get('.character-poster').should('have.attr', 'src', 'https://raw.githubusercontent.com/fedeperin/harry-potter-api-english/main/images/harry_potter.png')  
      cy.get('.name').contains('Harry');
  });
})

  it('Should be able to go back to the home page when clicking logo', () => {
		cy.get('h1').click();
		cy.url().should('eq', 'http://localhost:3000/');
	});

  it('Should be able to go to favorites when clinking the button', () => {
		cy.get('button').click();
		cy.url().should('eq', 'http://localhost:3000/favorites');
	});

  it('Should be able to go to details page when clinking the image', () => {
    cy.get('.characters').within(() => {
      cy.get('.character-poster').should('have.attr', 'src', 'https://raw.githubusercontent.com/fedeperin/harry-potter-api-english/main/images/harry_potter.png')  
      cy.get(':nth-child(1) > a > .name').click();
		  cy.url().should('eq', 'http://localhost:3000/details/1');
    });
    });
  })

