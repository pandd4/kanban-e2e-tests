describe('Fluxo de Kanban', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('deve adicionar uma nova tarefa', () => {
    cy.get('[data-testid="add-task-button"]').click();
    cy.get('[data-testid="task-input"]').type('Nova tarefa automatizada');
    cy.get('[data-testid="submit-task"]').click();

    cy.contains('Nova tarefa automatizada').should('be.visible');
  });

  it('deve mover a tarefa entre colunas', () => {
    cy.get('[data-testid="task-item"]').first().trigger('dragstart');
    cy.get('[data-testid="column-done"]').trigger('drop');

    cy.get('[data-testid="column-done"]')
      .contains('Nova tarefa automatizada')
      .should('be.visible');
  });
});
