/// <reference types="cypress" />
describe("cypress bug", () => {
	Cypress._.times(100, (k) => {
		it(`test ${k} of 100`, () => {
			cy.server();
			cy.route("get", "/api/posts").as("getPosts");

			cy.visit("http://localhost:3000");

			cy.wait("@getPosts");
			cy.wait("@getPosts");
			cy.wait("@getPosts");
			cy.wait("@getPosts");
		});
	})
});
