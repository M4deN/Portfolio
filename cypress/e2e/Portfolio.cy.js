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
  it('Deve exibir as todas as habilidades', () => {
    cy.scrollTo(0, 2300)

    cy.contains('Node').should('exist')
    cy.contains('HTML').should('exist')
    cy.contains('API').should('exist')
    cy.contains('Tests Automation').should('exist')
    cy.contains('JavaScript').should('exist')
    cy.contains('Insomnia').should('exist')
    cy.contains('Selenium').should('exist')
    cy.contains('GitHub').should('exist')
    cy.contains('MongoDB').should('exist')
    cy.contains('Cypress').should('exist')
    cy.contains('Java').should('exist')
    cy.contains('Robot Framework').should('exist')
    cy.contains('Mockito').should('exist')
    cy.contains('.NET').should('exist')
    cy.contains('JUnit5').should('exist')
    cy.contains('Postman').should('exist')
    cy.contains('Appium').should('exist')
    cy.contains('MySQL').should('exist')
  })

  it('Deve verificar as informações do currículo', () => {
    cy.scrollTo(0, 3200)

    cy.get('.resume-title').contains('Sumário').should('exist')
    cy.get('.resume-title').contains('Educação').should('exist')
    cy.get('.resume-title').contains('Experiência Profissional').should('exist')

    // Verificar se a instituição de ensino para Engenharia de Software está correta
    cy.get('.resume-item')
      .contains('Universidade Tecnologica Federal do Paraná, Cornélio Procópio, PR')
      .should('exist')

    // Verificar se a experiência de Desenvolvimento Freelancer está listada corretamente
    cy.get('.resume-item')
      .contains('Desenvolvimento Freelancer')
      .parent()
      .contains('2016 - 2021')
      .should('exist')

    // Verificar se a experiência na Tata Consultancy Services está listada corretamente
    cy.get('.resume-item')
      .contains('Quality Assurance')
      .parent()
      .contains('2021 - Present')
      .should('exist')
  })

  context('Testes para a seção de Projetos', () => {
    it('Deve exibir o título "Projects" e conter um link para o GitHub', () => {
      cy.get('.section-title h2').contains('Projects').should('be.visible')
      cy.get('.section-title a').should('have.attr', 'href', 'https://github.com/M4deN')
    })

    it('Deve verificar os projetos existentes', () => {

      cy.contains('Netflix').should('exist')
      cy.contains('Streming & WEB').should('exist')
      cy.contains('Calculadora').should('exist')
      cy.contains('WEB').should('exist')
      cy.contains('BOOK Express').should('exist')
      cy.contains('WEB').should('exist')
      cy.contains('Game Store').should('exist')
      cy.contains('Locadora').should('exist')
      cy.contains('Disney Plus').should('exist')
      cy.contains('Streaming').should('exist')
    })
  })

})