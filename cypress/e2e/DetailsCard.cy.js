describe('Details Card', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://fedeperin-harry-potter-api-en.herokuapp.com/characters', {
      fixture : 'harryPotter.json',
      statusCode: 200
    });
    cy.visit('http://localhost:3000/');
    cy.get('.characters > :nth-child(1)').click()
    cy.url().should('eq', 'http://localhost:3000/details/1');
    cy.get('h1').contains('Welcome to Hogwarts');
  })

  it('Should be able to go to favorites when clinking the button', () => {
		cy.get('.favorites').click();
		cy.url().should('eq','http://localhost:3000/favorites');
	});
  
  it('Should contain the details about the character', () => {
    cy.get('.details-card').within(()=> {
      cy.get('.character-poster').should('have.attr', 'src', 'https://raw.githubusercontent.com/fedeperin/harry-potter-api-english/main/images/harry_potter.png')
      cy.contains('Harry James Potter');
      cy.contains('Harry');
      cy.contains('Harry James Potter is a hogwarts student.');
      cy.contains('Gryffindor');
      cy.contains('Daniel Radcliffe');
      cy.contains('James Sirius Potter') 
    });
  });
  
  it('Should be able to go to home page when clinking go back button', () => {
    cy.get('[href="/"] > button').click();
    cy.url().should('eq','http://localhost:3000/');
  });

  it('Should be able to add character to favorites when clinking the add favorites button', () => {
    cy.get('.favorites').click();
    cy.url().should('eq','http://localhost:3000/favorites')
  });
})
