describe('Login', () => {
  it('deve acessar a página inicial', () => {
    cy.visit('/');
    cy.contains('Kanban').should('be.visible');
  });
});
