/// <reference types="cypress" />

interface Window {
  dataLayer: Record<string, unknown>[];
}

const TEST_CONTAINER_ID = 'GTM-N829CWR';

describe('Check if react-gtm-module is implemented and Google Tag Manager is added', () => {
  it('Should have a script tag with Google Tag Manager ID', () => {
    cy.visit('/');
    cy.get('script').should('have.attr', 'src', `https://www.googletagmanager.com/gtm.js?id=${TEST_CONTAINER_ID}&gtm_auth=&gtm_preview=&gtm_cookies_win=x`);
  });
});



