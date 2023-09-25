describe('Testes Portfolio', () => {
  beforeEach(() => {
    cy.visit('https://m4den.github.io/Portfolio/')
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

  it('Deve exibir todas as informações corretamente Section About', () => {
    cy.get('.col-lg-6').eq(0).within(() => {
      cy.contains('Instituição: Universidade Tecnologica Federal do Paraná').should('exist')
      cy.contains('LinkedIn: in/madenx/').should('exist')
      cy.contains('Cidade: Londrina, BRA').should('exist')
    })
    cy.scrollTo(0, 700)
    cy.get('.col-lg-6').eq(1).within(() => {
      cy.contains('Repositorio: https://github.com/M4deN').should('exist')
      cy.contains('Email: alexdesaran@outlook.com').should('exist')
      cy.contains('Quality Assurance: Tata Consultancy Services').should('exist')
    })
  })
  it('Deve exibir o Dark Mode Button', () => {
    cy.get('#dark-mode-toggle').should('be.visible')
  })

  it('Deve exibir as estatísticas corretamente', () => {
    // Verifica o total de commits
    cy.get('.count-box').eq(0).within(() => {
      cy.get('span[data-toggle="counter-up"]').should('have.text', '2.813')
      cy.contains('Total Commits').should('exist')
    })

    // Verifica o total de repositórios
    cy.get('.count-box').eq(1).within(() => {
      cy.get('span[data-toggle="counter-up"]').should('have.text', '42')
      cy.contains('Repositórios').should('exist')
    })

    // Verifica o total de linguagens utilizadas
    cy.get('.count-box').eq(2).within(() => {
      cy.get('span[data-toggle="counter-up"]').should('have.text', '12')
      cy.contains('Linguagens Utilizadas').should('exist')
    })

    // Verifica o total de estrelas
    cy.get('.count-box').eq(3).within(() => {
      cy.get('span[data-toggle="counter-up"]').should('have.text', '57')
      cy.contains('Total Estrelas').should('exist')
    })
  })
})