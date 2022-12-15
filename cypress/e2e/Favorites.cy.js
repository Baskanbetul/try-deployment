describe('Favorites', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://fedeperin-harry-potter-api-en.herokuapp.com/characters', {
      fixture : 'harryPotter.json',
      fixture: 'favoriteCharacter.json',
      statusCode: 200
    });
    cy.visit('http://localhost:3000/');
    cy.get('.characters > :nth-child(1)').click()
    cy.url().should('eq', 'http://localhost:3000/details/1');
    cy.get('.favorites').click() 
    cy.url().should('eq', 'http://localhost:3000/favorites');
    cy.get('h1').contains('Welcome to Hogwarts');
  });

  it('Should be able to go to home page when clinking go back button', () => {
    cy.get('h1').click()
    cy.url().should('eq','http://localhost:3000/');
  });

  it('Should be able to give error message once favorite page is empty', () => {
    cy.get('.app').within(()=> {
      cy.get('h2').contains('🧙🏻‍♀️ Hey, don\'t you have favorite character, Ca\'mon it is hogwarts\' world pick one them! 🧙🏼 ')
    });
    cy.get('h1').click()
    cy.visit('http://localhost:3000/');
  })
})



