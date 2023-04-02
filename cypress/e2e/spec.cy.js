describe("My First E2E Test", () => {
  it("Should add an item to the cart", () => {
    cy.visit("http://localhost:3000/cart");
    cy.get("html").click();
    cy.get("#showLogin").click();
    cy.get("#loginbtn").click();
    cy.get("#showcart").click();
    cy.get(".absolute .flex-grow > #clearcart").click();
    cy.get("html").click();
    cy.get("a:nth-child(1)").click();
    cy.get("#addtocart_1").click();
    cy.get("#cart").click();
    cy.get("#grand_total").should("contain", "Total: $5.99");
  });
});
