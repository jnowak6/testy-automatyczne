/// <reference types="cypress" />

describe("Klikniecie w element na stronie", () => {
    it("Kliknięcie z zakładkę Contact us", () => {
        cy.visit("/");
        cy.get(`a[title="Contact us"]`).click();
    })
})