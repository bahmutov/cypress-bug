/// <reference types="cypress" />
describe("cypress bug", () => {
	// it("should fail sometimes, rerun if not ;)", () => {
	// 	cy.server();
	// 	cy.route("get", "/api/posts").as("getPosts");

	// 	cy.visit("http://localhost:3000");

	// 	cy.wait("@getPosts");
	// 	cy.wait("@getPosts");
	// 	cy.wait("@getPosts");
	// 	cy.wait("@getPosts");
	// });

	// Cypress._.times(100, (k) => {
	// 	it(`route test ${k} of 100`, () => {
	// 		// cy.server();
	// 		// cy.route("get", "/api/posts").as("getPosts");
	// 		cy.intercept("GET", "/api/posts").as("getPosts");

	// 		cy.visit("http://localhost:3000");

	// 		cy.wait("@getPosts");
	// 		cy.wait("@getPosts");
	// 		cy.wait("@getPosts");
	// 		cy.wait("@getPosts");
	// 	});
	// })

	Cypress._.times(100, (k) => {
		it(`test ${k} of 100`, () => {
			cy.intercept("GET", "/api/posts").as("getPosts");

			cy.visit("http://localhost:3000");

			cy.wait("@getPosts");
			cy.wait("@getPosts");
			cy.wait("@getPosts");
			cy.wait("@getPosts");
		});
	})
});
