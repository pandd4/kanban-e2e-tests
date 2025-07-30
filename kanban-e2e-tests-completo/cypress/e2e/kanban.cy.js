
describe('Kanban Board - Testes End-to-End', () => {
  beforeEach(() => {
    cy.visit('https://kanban-dusky-five.vercel.app/');
  });

  it('Deve adicionar um novo cartão na coluna "To Do"', () => {
    cy.get('[data-column="To Do"] .add-card').click();
    cy.get('[data-column="To Do"] input[type="text"]').type('Novo card de teste{enter}');
    cy.get('[data-column="To Do"]').should('contain.text', 'Novo card de teste');
  });

  it('Deve mover um cartão de "To Do" para "In Progress"', () => {
    // Adiciona um card de teste
    cy.get('[data-column="To Do"] .add-card').click();
    cy.get('[data-column="To Do"] input[type="text"]').type('Mover este card{enter}');
    cy.get('[data-column="To Do"]').should('contain.text', 'Mover este card');

    // Simula o movimento do card usando drag-and-drop
    cy.get('[data-column="To Do"] .card').contains('Mover este card').trigger('dragstart');
    cy.get('[data-column="In Progress"]').trigger('drop');

    cy.get('[data-column="In Progress"]').should('contain.text', 'Mover este card');
  });

  it('Deve excluir um cartão da coluna "Done"', () => {
    // Adiciona um card de teste
    cy.get('[data-column="Done"] .add-card').click();
    cy.get('[data-column="Done"] input[type="text"]').type('Deletar este card{enter}');
    cy.get('[data-column="Done"]').should('contain.text', 'Deletar este card');

    // Remove o card
    cy.get('[data-column="Done"] .card')
      .contains('Deletar este card')
      .parent()
      .find('.delete-card')
      .click();

    cy.get('[data-column="Done"]').should('not.contain.text', 'Deletar este card');
  });
});
