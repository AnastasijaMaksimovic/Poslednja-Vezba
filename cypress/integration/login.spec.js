/// <reference types="cypress" />

import{  authLogin  } from '../page_objects/authLogin';

let validEmail = "anastasija.maksimovic21@gmail.com";
let validPassword = "anjaitoni111";

describe('login test', () => {

    it('login with valid credentials', () => {
        cy.visit('/');
        cy.url().should('eq', 'https://cypress.vivifyscrum-stage.com/login/');
        authLogin.login(validEmail, validPassword);
    });
});
