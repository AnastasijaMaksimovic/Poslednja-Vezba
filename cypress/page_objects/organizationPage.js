class OrganizationPage {
    get myOrganizationBtn() {
        return cy.get("a[href='/organizations/8663/boards']");
    }
    get addNewBoardBtn() {
        return cy.get(".vs-c-organization-boards__item--add-new");
    }
}

export const organizationPage = new OrganizationPage();
