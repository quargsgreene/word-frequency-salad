describe('empty spec', () => {
  it('visits the page', () => {
    cy.visit('https://quargsgreene.github.io/word-frequency-salad/');
  });

  it('should display feedback when the user has no moles', () => {
    cy.get('.input').type('0')
      .then(() => {
        cy.get('.play-button').click();
      }).then(() => {
        cy.get('#user-message').should('have.text', 'You sure aren\'t looking too bready.');
      });
  });

  it('should display feedback then the user enters an invalid input', () => {
    cy.get('.input').type('mole')
      .then(() => {
        cy.get('.play-button').click();
      }).then(() => {
        cy.get('#user-message').should('have.text', 'Please give Mx. Placenta a non-negative whole number quantity of moles. You do not have to partake in toenail ingestion as a result of this infraction.');
      });
  });

  it('should display the correct number of moles', () => {
    cy.get('.input').type('3')
      .then(() => {
        cy.get('.play-button').click();
      }).then(() => {
        cy.get('#user-message').should('have.text', 'You can have your moles removed and arrange them in a circle in 2 ways! However, you may sustain injuries in doing so. Always check with a dermatologist in the event that your moles cause you distress.');
      });
  });
});
