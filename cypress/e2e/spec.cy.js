describe('Testes Portfolio', () => {
  beforeEach(() => {
    cy.visit('https://m4den.github.io/Portfolio/') // Substitua pelo caminho real do seu site
  })

  it('Deve exibir a seção "About"', () => {
    cy.get('#about').should('exist')
  })

  it('Deve exibir informações sobre o perfil', () => {
    cy.get('.section-title h2').should('contain.text', 'About')
    cy.get('.section-title p').should('contain.text', 'Software Engineer')
    cy.get('.content h3').should('contain.text', 'Software Engineering & Quality Assurance')
    cy.get('.content p').should('contain.text', 'Atualmente estudante de Engenharia de Software')
  })

  it('Deve conter links de redes sociais', () => {
    cy.get('.social-links').should('exist')
    cy.get('.social-links a').should('have.length', 5)
  })

  it('Deve exibir informações de contato', () => {
    cy.get('.col-lg-6').first().contains('Instituição:').should('exist')
    cy.get('.col-lg-6').last().contains('Repositorio:').should('be.visible')
  })

  it('Deve exibir o dark mode toggle', () => {
    cy.get('#dark-mode-toggle').should('exist')
  })
})
