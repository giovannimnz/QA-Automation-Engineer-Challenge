import Index from "../pages/index";

const index = new Index();

describe ('Open window', () => {
    it ('Open a new window', () => {

        cy.visit('/');
        index.alertsFrameWindows();
        index.browserWindows();
        index.newWindow();
    });
});


