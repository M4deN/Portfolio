describe('Testes Portfolio', () => {
  beforeEach(() => {
    cy.viewport(1080, 1000)
    cy.visit('/')
  })

  it('Deve exibir a seção "About"', () => {
    cy.get('#about').should('exist')
  })

  it('Deve exibir informações sobre o perfil', () => {
    cy.get('.section-title h2').should('contain.text', 'About')
    cy.get('.section-title p').should('contain.text', 'Engenheiro de Software em Formação')
    cy.get('.content h3').should('contain.text', 'Software Engineering & Quality Assurance')
    cy.get('.content p').should('contain.text', 'Atualmente cursando Engenharia de Software')
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
      cy.contains('Email: Madenxx@outlook.com').should('exist')
      cy.contains('Quality Assurance: Tata Consultancy Services').should('exist')
    })
  })
  it('Deve exibir o Dark Mode Button', () => {
    cy.get('#dark-mode-toggle').should('be.visible')
  })

  it('Deve exibir as estatísticas corretamente', () => {
    // Verifica o total de commits
    cy.get('.count-box').eq(0).within(() => {
      cy.get('span[data-toggle="counter-up"]').should('have.text', '2.967')
      cy.contains('Commits').should('exist')
    })

    // Verifica o total de repositórios
    cy.get('.count-box').eq(1).within(() => {
      cy.get('span[data-toggle="counter-up"]').should('have.text', '49')
      cy.contains('Projetos').should('exist')
    })

    // Verifica o total de linguagens utilizadas
    cy.get('.count-box').eq(2).within(() => {
      cy.get('span[data-toggle="counter-up"]').should('have.text', '50')
      cy.contains('Certificações').should('exist')
    })

    // Verifica o total de estrelas
    cy.get('.count-box').eq(3).within(() => {
      cy.get('span[data-toggle="counter-up"]').should('have.text', '106')
      cy.contains('Followers').should('exist')
    })
  })
  it('Deve exibir todas as habilidades', () => {
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
    cy.contains('CI/CD').should('exist')
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
      .contains('2017 - 2021')
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
      cy.contains('h5', 'Nesta seção estaram alguns dos projetos').should('be.visible')
      cy.get('a[href="https://docs.github.com/pt/actions"]').should('exist')
      cy.get('a[href="https://github.com/M4deN"]').should('exist')
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

  context('Testes para a seção de Cursos e Certificações', () => {
    it('Deve exibir o título "Cursos e Certificações"', () => {
      cy.get('#cursos-certificacoes .section-title h2').contains('Courses And Certifications').should('be.visible')
    })

    it('Deve verificar a existência de pelo menos um curso', () => {
      cy.get('.curso-item').should('have.length.greaterThan', 0)
    })

    it('Deve verificar se todos os cursos têm um título e data de conclusão', () => {
      cy.get('.curso-item').each((curso) => {
        const titulo = curso.find('h3').text()
        const data = curso.find('p').text()

        expect(titulo).to.not.be.empty
        expect(data).to.not.be.empty
      })
    })

    it('Deve verificar se todos os links de certificados estão funcionando', () => {
      cy.get('.curso-item a[target="_blank"]').each((link) => {
        const certificateName = link.text()
        cy.log(`Verificando o status do certificado: ${certificateName}`)
        cy.request({
          url: link.attr('href'),
          failOnStatusCode: false
        }).its('status').should('eq', 200)
      })
    })


    it('Deve verificar se todos os links de certificados abrem em uma nova guia', () => {
      cy.get('.curso-item a[target="_blank"]').each((link) => {
        cy.wrap(link).invoke('attr', 'target').should('equal', '_blank')
      })
    })
  })

  context('Testes para a seção Curriculum Vitae & Contact', () => {
    it('Deve verificar os links de download do CV', () => {
      cy.get('a[href$="Curriculum_AlecioMedeirosEnglish.pdf"]').should('have.attr', 'href', 'assets/pdf/Curriculum_AlecioMedeirosEnglish.pdf')
      cy.get('a[href$="Curriculum_AlecioMedeiros.pdf"]').should('have.attr', 'href', 'assets/pdf/Curriculum_AlecioMedeiros.pdf')
    })

    it('Deve verificar o link de solicitação de contato', () => {
      cy.get('.btn.btn-primary[href^="mailto:madenxx@outlook.com"]').should('have.attr', 'href', 'mailto:madenxx@outlook.com?subject=Solicitação de Contato&body=Olá, gostaria de solicitar o seu contato.')
    })

    it('Deve verificar se os botões de download e solicitação de contato estão visíveis', () => {
      cy.get('.btn.btn-primary').should('be.visible')
    })
  })

  it('Deve baixar o CV em inglês corretamente', () => {
    cy.intercept({
      method: 'GET',
      url: '**/Curriculum_AlecioMedeirosEnglish.pdf',
    }).as('downloadCVInglês')

    cy.get('a[href$="Curriculum_AlecioMedeirosEnglish.pdf"]').click()
    cy.wait('@downloadCVInglês')
    cy.readFile('cypress/downloads/Curriculum_AlecioMedeirosEnglish.pdf').should('exist')

  })

  it('Deve baixar o CV em português corretamente', () => {
    cy.intercept({
      method: 'GET',
      url: '**/Curriculum_AlecioMedeiros.pdf',
    }).as('downloadCVPt')

    cy.get('a[href$="Curriculum_AlecioMedeiros.pdf"]').click()
    cy.wait('@downloadCVPt')
    cy.readFile('cypress/downloads/Curriculum_AlecioMedeiros.pdf').should('exist')
  })

  context('Validação Footer', () => {

    it('Deve exibir o copyright corretamente', () => {
      cy.scrollTo(0, 4700)
      cy.get('#footer .copyright').should('exist').and('contain', '@M4deN')
    })

    it('Deve conter um link de créditos válido', () => {
      cy.get('#footer .credits a')
        .should('have.attr', 'href', 'http://linktr.ee/Alexdesaran/')
        .and('have.attr', 'target', '_blank')
        .and('contain.text', 'Alécio L. Medeiros')
    })
  })
})