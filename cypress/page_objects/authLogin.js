class AuthLogin {
    get emailInput() {
        return cy.get("input[type='email']");
    }
    get passwordInput() {
        return cy.get("input[type='password']");
    }
    get submitButton() {
        return cy.get("button[type='submit']");
    }

    login(email, password) {
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.submitButton.click();
    }
}

export const authLogin = new AuthLogin();