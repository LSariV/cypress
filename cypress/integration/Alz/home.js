/// <reference types="Cypress" />

import homePage from  '../Alz/PagesObjects/homePage'

describe( 'Home Page',  () => {
    
  //const hp = new homePage()

    beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('exampl').then(function(dat)  {
          // "this" is still the test context object
          this.dat = dat
        })
      })
    

it ('NewsLetter subscription', () => {

  const homepage = new homePage()

//cy.visit("https://www.alzheimers.net/");
homepage.visit()
homepage.getemailTextbox().type('sana@hmail.com')
homepage.getSubscribeButton().click()
cy.contains('Get the latest tips, news, and advice on preventing Alzheimer’s, treatment, stages and resources.')
//cy.get('#drift-frame-controller > .drift-frame-controller').should('be.visible')
//cy.get('#drift-frame-controller > .drift-frame-controller').click()
//cy.get('.jss145 > svg > path').click()
//cy.get('#drift-frame-controller > .drift-frame-controller').contains('')
//cy.get('#root > main > div.drift-widget-message-preview-wrapper > div > button.drift-widget-naked-button.drift-widget-message-preview-text.drift-widget-message-preview-text--align-right').click()

})

 it ('home page Lead', () => {

     cy.get('#cro-right-rail-form > :nth-child(1)').contains('Who are you researching for?')
     cy.get('#cro-right-rail-form > :nth-child(2)').contains('Myself')
    cy.get('#cro-right-rail-form > :nth-child(3)').contains('A loved one')

cy.get('#cro-right-rail-form > :nth-child(2)').as('myselfbutton')

     cy.get('@myselfbutton').click()


   })

//it ('homepage CTA lead', function() {

//cy.SubmitCTALeadForm(this.dat.zip,this.dat.name,this.dat.email,this.dat.phone)


    // cy.get('.jss164 > .MuiTypography-root').as('CTAleadformtitle')
    // cy.get('@CTAleadformtitle').contains("Please fill out the form to get Alzheimer's and dementia care information:")
    // cy.get('span.MuiTypography-root.jss157.MuiTypography-body1').should('be.visible')
    // cy.get('input[name="locationForm"]').type(this.dat.zip)
    // cy.get('div.jss172').click()
    // cy.get('input[placeholder="Full Name"]').type(this.dat.name)
    // cy.get('input[placeholder="Email"]').type(this.dat.email)
    // cy.get('input[placeholder="(###) ###-####"]').type(this.dat.phone)
     //cy.get('.MuiButton-label').contains("Request Info").click()
     //cy.get('.jss184').contains('Thank you!')




// it('thankyou page assertions', ()=>{
//     cy.get('.jss184').contains('Thank you!')
//     //cy.get('.jss154 > .MuiTypography-root.jss157.MuiTypography-body1').click()



// })

it('FD page GetHelpNow', function() {
    cy.visit("https://www.alzheimers.net/find-dementia-care")
    cy.get('.jss79 > .MuiButtonBase-root > .MuiButton-label').contains("Get help now!").click()
   // cy.SubmitCTALeadForm(this.dat.zip,this.dat.name,this.dat.email,this.dat.phone)
    cy.SubmitGetHelpNow(this.dat.zip,this.dat.name,this.dat.email,this.dat.phone)

    
})


it('Resources page GetHelpNow', function() {
  cy.visit("https://www.alzheimers.net/resources")
  cy.get('.jss70 > .MuiButtonBase-root > .MuiButton-label').contains("Get help now!").click()
  cy.SubmitGetHelpNow(this.dat.zip,this.dat.name,this.dat.email,this.dat.phone)

  
})


})

