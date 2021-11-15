
/// <reference types="cypress" />

// --- This is CTA leadform----

// Cypress.Commands.add('SubmitCTALeadForm',(zip,FullName,Email,Phone ) => {

//    // cy.get('.jss164 > .MuiTypography-root').as('CTAleadformtitle')
//    // cy.get('@CTAleadformtitle').contains("Please fill out the form to get Alzheimer's and dementia care information:")
//     cy.get('span.MuiTypography-root.jss157.MuiTypography-body1').should('be.visible')
//    // cy.get('input[name="locationForm"]').type(zip)
//     cy.get('div.jss172').click()
//     cy.get('input[placeholder="Full Name"]').type(FullName)
//     cy.get('input[placeholder="Email"]').type(Email)
//     cy.get('input[placeholder="(###) ###-####"]').type(Phone)

//      //cy.get('.MuiButton-label').contains("Request Info").click()
//      //cy.get('.jss184').contains('Thank you!')

// })

//.jss172 > .jss98 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input[name="locationForm"]

Cypress.Commands.add('SubmitGetHelpNow',function(zip,FullName,Email,Phone )  {
   cy.get('main>div:nth-child(3)>div:nth-child(2)>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)>p').as('CTAleadformtitle')
    cy.get('@CTAleadformtitle').contains("Please fill out the form to get Alzheimer's and dementia care information:")
    cy.get('main>div:nth-child(3)>div:nth-child(2)>div:nth-child(1)>span').should('be.visible')
    cy.get('main>div:nth-child(3)>div:nth-child(2)>div:nth-child(1)>div:nth-child(2)>div:nth-child(3)>div:nth-child(1)>div> input[name="locationForm"]').type(zip).wait(2000).type('{enter}')
    
    cy.get('main>div:nth-child(3)>div:nth-child(2)>div:nth-child(1)>div:nth-child(2)>div:nth-child(4)>div:nth-child(2)>input[placeholder="Full Name"]').type(FullName)
    cy.get('main>div:nth-child(3)>div:nth-child(2)>div:nth-child(1)>div:nth-child(2)>div:nth-child(5)>div:nth-child(2)>input[placeholder="Email"]').type(Email)
    cy.get('main>div:nth-child(3)>div:nth-child(2)>div:nth-child(1)>div:nth-child(2)>div:nth-child(6)>div:nth-child(2)>input[placeholder="(###) ###-####"]').type(Phone)

    //cy.get('main>div:nth-child(3)>div:nth-child(2)>div:nth-child(1)>div:nth-child(2)>div:nth-child(3)>div:nth-child(1)>div> input[name="locationForm"]').type(zip).type('{enter}')

    //cy.get('main>div:nth-child(3)>div:nth-child(2)>div:nth-child(1)>div:nth-child(2)>button').contains("Request Info").click()
     //cy.get('.jss184').contains('Thank you!')

})

//cy.get('main>div:nth-child(3)>div:nth-child(2)>div:nth-child(1)>div:nth-child(2)>div:nth-child(2)>label') for location label