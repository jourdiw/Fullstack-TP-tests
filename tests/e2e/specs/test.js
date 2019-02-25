// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Has a button', () => {
    cy.visit('/');
    cy.contains('button', "Découvrir l'application finale");
  });
  it('Clicks button and goes to correct url', () => {
    cy.visit('/');
    cy.get('button').contains("Découvrir l'application finale").click();
    cy.url().should('include', 'search');
  });
  it('Translates site into English', () => {
    cy.visit('/');
    cy.contains('.v-toolbar__title', 'Makina Corpus - Formation Vue.js');
    cy.get('.lang-menu').children().not('.current').click();
    cy.contains('.v-toolbar__title', 'Makina Corpus - Vue.js Training');
  });
  it('Translates site into French', () => {
    cy.contains('.v-toolbar__title', 'Makina Corpus - Vue.js Training');
    cy.get('.lang-menu').children().not('.current').click();
    cy.contains('.v-toolbar__title', 'Makina Corpus - Formation Vue.js');
  })
});
