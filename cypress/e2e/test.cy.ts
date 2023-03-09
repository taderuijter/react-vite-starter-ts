/// <reference types="cypress" />

describe('Check if e2e test is setup', () => {
  it('Visit homepage', () => {
      cy.visit('/')
  })
})