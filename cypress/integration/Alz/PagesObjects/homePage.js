/// <reference types="Cypress" />

class homePage
{
    visit()
    {
        cy.visit("https://www.alzheimers.net/");
    }


    getemailTextbox()
    {

        return cy.get('.MuiInputBase-input')
    }

    getSubscribeButton()
    {
        return cy.get('span.MuiButton-label')
    }


}

export default homePage