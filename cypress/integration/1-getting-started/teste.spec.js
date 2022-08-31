
context('Teste fluxo de cadastro E2E',() => {
    beforeEach(() => {
        cy.visit("https://buger-eats.vercel.app/deliver")

    })
    
    it('Testara fluxo de cadastro correto', () => {
        cy.get('input[name="name"]').type('Heloisa')
        cy.get('input[name="cpf"]').type('08800226474')
        cy.get('input[name="email"]').type('dantasrenato90@gmail.com')
        cy.get('input[name="whatsapp"]').type('(83) 99382-1641')
        .should('be.visible')
        cy.get('input[name="postalcode"]').type('58430-480')
        cy.get('input[type="button"]').click()
        cy.get('input[name="address-number"]').type('137')
        cy.get('input[name="address-details"]').type('Próximo a AACD')
        cy.get('.delivery-method > :nth-child(1)').click()
        .should('be.visible')
        cy.get('p')
        . attachFile ( 'CNH.json.png' ,  {  subjectType : 'drag-n-drop'  } )
        cy.contains('.button-success','Cadastre-se para fazer entregas').click().should('be.visible')
        cy.contains('div','Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.').should('be.visible')
            
    })


    
});