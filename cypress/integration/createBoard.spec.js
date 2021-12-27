/// <reference types="cypress" />

import{  authLogin  } from '../page_objects/authLogin';
import{  organizationPage  } from '../page_objects/organizationPage';

let validEmail = "anastasija.maksimovic21@gmail.com";
let validPassword = "anjaitoni111";


describe('boards', () => {

    before('login', () => {
        // cy.intercept({
        //     method: 'POST',
        //     url: 'http://cypress-api.vivifyscrum-stage.com/api/v2/login'
        // }).as('login');

        cy.visit("/");
        cy.url().should('contains', '/login');

        authLogin.login(validEmail, validPassword);

        // cy.wait('@login').then((interception) => {
        //     console.log(interception);
        //     expect(interception.response.statusCode).eq(200);
        // });
        cy.url().should('not.contains', '/login');
    });

    it('create new board', () => {
        cy.url().should('contains', '/my-organizations');
        organizationPage.myOrganizationBtn.click();
        cy.get("button[class='vs-c-btn vs-c-btn--primary vs-c-btn--lg vs-u-font-sm vs-c-modal--features-confirm-button']").click();
        cy.get("div[class='vs-c-organization__section']");
        organizationPage.addNewBoardBtn.should('be.visible');
        organizationPage.addNewBoardBtn.should('have.css', 'background-color', 'rgb(230, 230, 230)');
        organizationPage.addNewBoardBtn.should('have.css', 'color', 'rgb(77, 77, 77)');
        cy.get(".vs-c-organization-boards__item--add-new").click();
        cy.get("input[type='text']").eq(1).type('novi bord');
        cy.get("button[name='next_btn']").click();
        cy.get("span[name='type_scrum']").click();
        cy.get("button[name='next_btn']").click();
        cy.get("button[name='next_btn']").click();
        cy.get("button[name='next_btn']").click();
     });
});
